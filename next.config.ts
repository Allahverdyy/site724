import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statik HTML çıktısı almak için bu ayar şart:
  output: 'export',
  
  // Klasik hostinglerde (Plesk vb.) resim optimizasyonu çalışmaz, kapatıyoruz:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;