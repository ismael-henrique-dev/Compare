import type { Metadata } from 'next'
import { rubik } from '@/app/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Compare',
    default: 'Compare',
  },
  description: '',
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br' suppressHydrationWarning={true}>
      <body className={`${rubik.variable} antialiased`}>{children}</body>
    </html>
  )
}
