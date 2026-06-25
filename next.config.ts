import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  turbopack: {}, 
  
  
  webpack: (config: any, options: { dev: boolean; isServer: boolean }) => {
    return config;
  },
};

export default nextConfig;