import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['media.dodostatic.net'], // Добавляем разрешённый хост
  },
};

export default nextConfig;
