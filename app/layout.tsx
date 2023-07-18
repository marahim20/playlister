import './globals.css'
import type { Metadata } from 'next'
import { Grandstander, Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const grandstander = Grandstander({ subsets: ['latin'], variable: '--font-heading' })
const raleway = Raleway({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'PlayLister',
  description: 'This app helps you to calculate the total duration of a YouTube playlist.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={` ${grandstander.variable} ${raleway.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
