import { withContentlayer } from 'next-contentlayer2'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for easy hosting
  images: {
    unoptimized: true, // Required for static export
  },
}

export default withContentlayer(nextConfig)
