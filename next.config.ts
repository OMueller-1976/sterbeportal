import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'sterbeportal.de' }],
        destination: 'https://www.sterbeportal.de/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      new URL("https://www.sterbeportal.de/**"),
      new URL("https://eritaj.de/**"),
    ],
  },
};

export default nextConfig;
