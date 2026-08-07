import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits .next/standalone — a self-contained server carrying only the traced
  // dependencies. The runtime image then needs no toolchain, no source, and no
  // dev dependencies. Required by the Dockerfile's `node server.js`.
  output: "standalone",

  // Pin the workspace root instead of letting Next infer it.
  //
  // Inference walks up looking for lockfiles, and when it finds one ABOVE this
  // directory it treats that as the root — then writes the standalone bundle
  // to `.next/standalone/<relative path from that root>/server.js` instead of
  // `.next/standalone/server.js`. Docker happens to be immune (its build
  // context contains exactly one lockfile), so the breakage shows up only
  // outside the image: in a git worktree under .claude/, in a checkout nested
  // in another project, or anywhere a stray lockfile appears upstream. The
  // failure is `MODULE_NOT_FOUND` on a path nobody chose.
  //
  // Pinning it makes the output path the same everywhere, which is what lets
  // CI test the same bundle the image runs.
  turbopack: { root: projectRoot },
  outputFileTracingRoot: projectRoot,

  // Caddy sets the transport-level security headers (see deploy/*/setup-host.sh);
  // this is the one only the app can suppress.
  poweredByHeader: false,
};

export default nextConfig;
