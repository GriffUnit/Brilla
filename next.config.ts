import type { NextConfig } from 'next';
import { redirect } from 'next/dist/server/api-utils';

const nextConfig: NextConfig = {
  typescript: {
ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**', 
      },
    ],
  },
 /*  module.exports = {...nextConfig, async redirects() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true,
      },
    ];
  }
}, */
}
export default nextConfig;

 /*  experimental: {
    ppr: 'incremental',
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
  } */