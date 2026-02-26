import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Site724 | Kars Web Tasarım & Dijital Çözümler",
  description:
    "Kars ve Kağızman'da profesyonel web tasarım, Google üst sıra SEO ve dijital çözümler. İşletmenizi 7/24 online dünyaya taşıyoruz.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Site724 | Kars Web Tasarım",
    description: "Modern, hızlı ve SEO uyumlu web siteleri.",
    url: "https://site724.com.tr",
    siteName: "Site724",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Site724 - Kars Web Tasarım & SEO",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Site724 | Kars Web Tasarım",
    description: "Modern, hızlı ve SEO uyumlu web siteleri.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://site724.com.tr",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Site724",
  url: "https://site724.com.tr",
  telephone: "+905531716331",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kağızman",
    addressRegion: "Kars",
    postalCode: "36000",
    addressCountry: "TR",
  },
  areaServed: ["Kars", "Kağızman"],
  sameAs: [
    "https://www.instagram.com/site724kars/",
    "https://www.facebook.com/site724kars/",
  ],
  logo: "https://site724.com.tr/logo.svg", // yükleyince aç
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}