import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
 
  disable: process.env.NODE_ENV === "development",
});

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
   webpack: (config: any, options: { dev: boolean; isServer: boolean }) => {
     return config;
  },

  
};



module.exports = nextConfig;

export default withPWA(nextConfig);