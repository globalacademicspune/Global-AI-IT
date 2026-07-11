import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Global AIIT - Big Data & Data Engineering Courses',
  description: 'Master Cloud Big Data Technologies with industry experts. 30K+ learners from 23+ countries. 100+ LPA highest CTC recorded.',
  generator: 'v0.app',

  // ⭐ UPDATED FAVICON CONFIG
  icons: {
    icon: [
      {
        url: '/GlobalAIIT-logo.png',   // <--- Your logo
        sizes: '32x32',
        type: 'image/jpeg',
      }
    ],
    apple: '/GlobalAIIT-logo.png',     // <--- Apple touch icon
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
