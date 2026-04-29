import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'tapeless — measure distance with your phone',
  description: 'Hold your phone like a measuring wheel, keep it level, hit start and walk. Visual AR markers, segmented subtotals, and a photo on every save.',
  metadataBase: new URL('https://tapelessapp.com'),
  openGraph: {
    title: 'tapeless',
    description: 'Measure distance the way your body already moves.',
    url: 'https://tapelessapp.com',
    siteName: 'tapeless',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'tapeless',
    description: 'Measure distance the way your body already moves.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
