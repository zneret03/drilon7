import './globals.css'
import { Instrument_Sans, JetBrains_Mono } from 'next/font/google'
import { BrandMark } from '@/components/layout/brand-mark'
import { CommandBar } from '@/components/layout/command-bar'
import { Footer } from '@/components/layout/footer'
import { profile } from '@/content'
import { siteUrl } from '@/lib/env'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

/**
 * Self-hosted through next/font so the two faces load from our own origin and
 * never block paint — the previous site pulled them from Google at runtime.
 */
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`
  },
  description: profile.intro,
  manifest: '/manifest.json',
  robots: { index: true, follow: true }
}

/**
 * The one shell every route renders inside: fonts, metadata base, and the
 * bar/main/footer frame. Kept a Server Component so only the bar ships JS.
 */
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en' className={`${instrumentSans.variable} ${jetbrainsMono.variable}`}>
      <body className='flex min-h-screen flex-col'>
        <CommandBar brand={<BrandMark />} />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
