# syntax=docker/dockerfile:1
#
# Multi-stage so the runtime image carries the traced server bundle and nothing
# else. Same shape as msp-tools/client-portal — deliberately, so there is one
# container idiom in the org rather than one per repo.
#
# NOTHING environment-specific is baked in. The site reads no `process.env` at
# all, which is what makes one SHA-tagged image promote from dev to prod
# unchanged and makes rollback a pure retag. Keep it that way: a
# `NEXT_PUBLIC_*` read from a page or `metadata` block is evaluated during
# `next build`, so the moment one appears, dev and prod stop being the same
# artifact. Anything that must differ per environment belongs in the Caddy
# vhost or in a route handler that reads the server env at request time.

# ── deps ────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app

# Manifests only, so this layer caches on the lockfile rather than on every
# source edit.
COPY package.json package-lock.json ./
RUN npm ci

# ── build ───────────────────────────────────────────────────────────────────
FROM node:22-alpine AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# ── runtime ─────────────────────────────────────────────────────────────────
FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
# 0.0.0.0 inside the container only. The host publishes this to 127.0.0.1 (see
# deploy/*/docker-compose.yml); Docker's iptables rules bypass UFW, which is how
# Postgres got briefly exposed to the internet on 2026-07-14.
ENV HOSTNAME=0.0.0.0

# Unprivileged. The app never writes to its own files.
RUN addgroup -g 1001 -S nodejs && adduser -S -u 1001 -G nodejs nextjs

COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

# The standalone build emits its own minimal server.
CMD ["node", "server.js"]
