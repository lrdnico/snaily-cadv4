import { i18n } from "./i18n.config.mjs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const nextConfig = {
  // === ESTA SECCIÓN SOLUCIONA EL ERROR "is missing, expected string" ===
  env: {
    NEXT_PUBLIC_CLIENT_URL: process.env.NEXT_PUBLIC_CLIENT_URL,
    NEXT_PUBLIC_PROD_ORIGIN: process.env.NEXT_PUBLIC_PROD_ORIGIN,
    CORS_ORIGIN_URL: process.env.CORS_ORIGIN_URL,
    JWT_SECRET: process.env.JWT_SECRET, 
  },
  // ===================================================================

  i18n,
  cleanDistDir: true,
  experimental: {
    webpackBuildWorker: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "**"
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**"
      },
    ]
  },
};

export default nextConfig;
