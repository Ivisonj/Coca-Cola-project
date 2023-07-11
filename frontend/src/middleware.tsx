import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {

    const token = request.cookies.get('cocacola-token')?.value

    const signinURL = new URL('/signin', request.url)

    if(!token) {
        if(request.nextUrl.pathname === '/signin') {
            return NextResponse.next()
        }
        return NextResponse.redirect(signinURL)
    }
}

export const config = {
    matcher: ['/signin', '/dashboard/:path*']
}