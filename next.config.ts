import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `standalone` is for the Docker image, which runs `server.js` directly.
  // Vercel does its own output tracing and fails the build outright when the
  // standalone output replaces it ("ENOENT: .next/next-server.js.nft.json"),
  // so the option is set only when we are not building on Vercel.
  ...(process.env.VERCEL ? {} : { output: "standalone" as const }),
  poweredByHeader: false,
};

export default nextConfig;
