import type { NextConfig } from "next";

// Buraya kendi domainini yazıyoruz ki dosyaları hep buradan çeksin
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Klasörlü yapı (404 hatasını çözen kahraman)
  
  // SİHİRLİ DOKUNUŞ: Canlıdaysak dosyaları direkt domainden çek, localdeysen normal takıl.
  assetPrefix: isProd ? 'https://site724.com.tr' : undefined,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;