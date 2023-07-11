import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {

    const token = request.cookies.get('cocacola-token')?.value

    const homeURL = new URL('/', request.url)

    if(!token) {
        if(request.nextUrl.pathname === '/signin') {
            return NextResponse.next()
        }
        return NextResponse.redirect(homeURL)
    }
}

export const config = {
    matcher: ['/signin', '/companies/:path*']
}