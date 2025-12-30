import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { Suspense } from 'react'

export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense fallback='Carregando...'>
      <Header />
      <main>{children}</main>
      <Footer />
    </Suspense>
  )
}
