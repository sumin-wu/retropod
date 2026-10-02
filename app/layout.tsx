import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bagel_Fat_One, Fredoka } from 'next/font/google'
import './globals.css'

const bagelFatOne = Bagel_Fat_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bagel',
  display: 'swap',
})

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RetroPod — The phone that remembers where it came from',
  description:
    'RetroPod is a modern smartphone wrapped in unapologetic Y2K nostalgia. Tactile buttons, candy-colored translucent shells, and 36 hours of battery life.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#7a1f2b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${bagelFatOne.variable} ${fredoka.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
