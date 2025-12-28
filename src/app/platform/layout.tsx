export default function PlatformLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <Suspense fallback='Carregando...'>
    <>
      <div>{children}</div>
      <div>Platform Layout</div>
    </>

    // </Suspense>
  )
}
