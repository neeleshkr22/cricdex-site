import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cricdex - Your Ultimate Cricket Companion',
  description: 'CricDex is your ultimate cricket companion, providing real-time scores, detailed statistics, and in-depth analysis of cricket matches worldwide. Stay updated with live scores, player stats, and match insights all in one place.',
  generator: 'Neelesh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
