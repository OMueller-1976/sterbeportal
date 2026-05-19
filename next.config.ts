import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      new URL("https://www.sterbeportal.de/**"),
      new URL("https://eritaj.de/**"),
    ],
  },
};

export default nextConfig;
