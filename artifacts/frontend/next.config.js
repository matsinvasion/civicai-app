/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    "cb93f12d-2b6a-4860-a36c-6cfa922ce2ba-00-y0o4hp6xqf88.worf.replit.dev",
  ],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
