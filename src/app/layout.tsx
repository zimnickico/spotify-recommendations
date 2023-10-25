import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'rects: simple listening recommendations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Analytics/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
