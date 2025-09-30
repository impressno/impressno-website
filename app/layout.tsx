import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Impressno — Where Creativity & Strategy Meet",
  description: "Sustainable model for tailoring apps to the needs of customers, managing their digital footprints.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://impressno.com/",
  },
  openGraph: {
    siteName: "Impressno",
    title: "Impressno — Where Creativity & Strategy Meet",
    description: "Sustainable model for tailoring apps to the needs of customers, managing their digital footprints.",
    type: "website",
    url: "https://impressno.com/",
    images: [
      {
        url: "/placeholder.jpg",
        alt: "Impressno — Where Creativity & Strategy Meet",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impressno — Where Creativity & Strategy Meet",
    description: "Sustainable model for tailoring apps to the needs of customers, managing their digital footprints.",
    images: [
      {
        url: "/placeholder.jpg",
        alt: "Impressno — Where Creativity & Strategy Meet",
      },
    ],
    site: "@impressno",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  )
}
