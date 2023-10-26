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
    <html lang="en" className="m-0 p-0 h-[90vh] overflow-hidden">
      <Analytics/>
      <body className={inter.className + " m-0 p-0 h-[90vh] overflow-hidden"}>{children}</body>
    </html>
  )
}
