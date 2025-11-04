/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'asof.org.br', 'www.asof.org.br', 'cdn.example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      // Redirecionamentos para páginas importantes
      {
        source: '/admin',
        destination: '/admin/login',
        permanent: true,
      },
      {
        source: '/associado',
        destination: '/associado/login',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig