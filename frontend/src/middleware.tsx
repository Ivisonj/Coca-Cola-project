import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {

    const token = request.cookies.get('cocacola-token')?.value
    const account = request.cookies.get('account')?.value

    const signinURL = new URL('/signin', request.url)
    const dashboard = new URL('/user', request.url)
    const companyDashboard = new URL('/company', request.url)

    if(!token) {
        if(request.nextUrl.pathname === '/signin') {
            return NextResponse.next()
        }
        return NextResponse.redirect(signinURL)
    }

    if(token) {
        if(account === 'user' && request.nextUrl.pathname.startsWith('/company')) {
            return NextResponse.redirect(dashboard)
        } else if(account === 'user' && request.nextUrl.pathname.startsWith('/register')) {
            return NextResponse.redirect(dashboard)
        } else if(account === 'company' && request.nextUrl.pathname.startsWith('/user')) {
            return NextResponse.redirect(companyDashboard)
        } else if(account === 'company' && request.nextUrl.pathname.startsWith('/menu-selection')) {
            return NextResponse.redirect(companyDashboard)
        }
    }
}

export const config = {
    matcher: [
        '/signin', 
        '/user/:path*', 
        '/company/:path*', 
        // '/register-product/:path*',
        // '/menu-selection/:path*',
    ]
}