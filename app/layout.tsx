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
      <head>
        <meta property='og:title' content='PlayLister' />
        <meta property='og:description' content='This app helps you to calculate the total duration of a YouTube playlist.' />
        <meta property='og:image' content='<generated>' />
        <meta property="og:image:type" content="<generated>" />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:url' content='https://ytplaylister.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='PlayLister' />
      </head>
      <body suppressHydrationWarning={true} className={` ${grandstander.variable} ${raleway.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
