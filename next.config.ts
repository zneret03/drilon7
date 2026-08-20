import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Type errors must fail the build. The previous config silenced them.
  // Next 16 removed the `eslint` config key with `next lint`; ESLint runs
  // standalone through `npm run lint` and the CI verify job instead.
  typescript: { ignoreBuildErrors: false },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' }
        ]
      }
    ]
  }
}

export default nextConfig
