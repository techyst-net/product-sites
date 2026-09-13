import type { NextConfig } from "next";

// Vercel handles the build and the hosting; nothing here is containerised any
// more, so the standalone output that the old Docker image needed is gone.
const nextConfig: NextConfig = {
  poweredByHeader: false,
};

export default nextConfig;
