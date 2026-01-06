import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fountain Movers & Transport | Professional Moving Services in Nairobi | Moving Company in Nairobi, Kenya",

  description:
    "Expert moving company in Nairobi offering corporate office moving, house relocation, storage, furniture disassembly, and logistics planning. Professional, affordable, trusted since 2014. Free quote today!",
  keywords: [
    "moving company Nairobi",
    "house moving services Kenya",
    "office relocation Nairobi",
    "moving and storage",
    "furniture moving Nairobi",
  ],
  authors: [{ name: "Fountain Movers & Transport" }],
  creator: "Fountain Movers & Transport",
  publisher: "Fountain Movers & Transport",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://fountainmovers.co.ke",
    siteName: "Fountain Movers & Transport",
    title: "Fountain Movers & Transport | Professional Moving Services in Nairobi",
    description: "Expert moving solutions in Nairobi - corporate, residential, storage, and logistics services",
    images: [
      {
        url: "/movers1.jpg",
        width: 1200,
        height: 630,
        alt: "Fountain Movers & Transport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fountain Movers & Transport",
    description: "Professional moving services in Nairobi, Kenya",
  },
  alternates: {
    canonical: "https://fountainmovers.co.ke",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Fountain Movers & Transport",
              image: "/movers1.jpg",
              description:
                "Professional moving and transport company in Nairobi providing corporate, residential, and logistics services",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1st floor office number 12, Makarios building",
                addressLocality: "Nairobi",
                addressRegion: "Nairobi",
                postalCode: "00100",
                addressCountry: "KE",
              },
              telephone: "+254720479096",
              email: "info@fountainmovers.co.ke",
              url: "https://fountainmovers.co.ke",
              sameAs: ["https://www.facebook.com/Fountainmovers"],
              priceRange: "$$",
              areaServed: "Nairobi, Kenya",
              serviceType: ["Moving Services", "Storage Services", "Logistics Planning", "Cleaning Services"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
