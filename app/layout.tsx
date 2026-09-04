import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// ⭐ COMPLETELY UPDATED META FOR GEN-AI, ML & DATA SCIENCE PREVIEWS
export const metadata: Metadata = {
  title: 'Global AIIT - AI, ML & Data Science Engineering Courses',
  description: 'Master AI, Large Language Models (LLMs), MLOps, Data Science, and Cloud Architecture with enterprise industry architects.',
  generator: 'v0.app',

  // Open Graph for WhatsApp, LinkedIn & Twitter Link Previews
  openGraph: {
    title: 'Global AIIT - AI, ML & Data Science Engineering Courses',
    description: 'Master AI, Large Language Models (LLMs), MLOps, Data Science, and Cloud Architecture with enterprise industry architects.',
    url: 'https://global-academics.com',
    siteName: 'Global AIIT',
    images: [
      {
        url: '/GlobalAIIT-logo.png',
        width: 1200,
        height: 630,
        alt: 'Global AIIT Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // FAVICON CONFIG
  icons: {
    icon: [
      {
        url: '/GlobalAIIT-logo.png',   
        sizes: '32x32',
        type: 'image/png', // Logo type standard kar diya hai
      }
    ],
    apple: '/GlobalAIIT-logo.png',     
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}