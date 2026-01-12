import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value
  const { pathname } = request.nextUrl

  if ((pathname.startsWith('/platform/alerts') || pathname.startsWith('/platform/edit-profile') ) && !accessToken) {
    const url = new URL('/login', request.url)
    url.searchParams.set('unauthorized', 'true')
    return NextResponse.redirect(url)
  }

  if (pathname.startsWith('/login') && accessToken) {
    const url = new URL('/platform/home', request.url)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}
