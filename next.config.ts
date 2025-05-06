import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb', // Or your preferred limit
    },
  },
  allowedDevOrigins: [
    'http://9000-idx-studio-1746512565750.cluster-ubrd2huk7jh6otbgyei4h62ope.cloudworkstations.dev',
    'http://9000-idx-studio-1746512565750.cluster-ubrd2huk7jh6otbgyei4h62ope.cloudworkstations.dev',
  ],
};

export default nextConfig;
