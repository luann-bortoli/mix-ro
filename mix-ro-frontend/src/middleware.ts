import { NextResponse, type NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const secretValue = process.env.JWT_SECRET

if (!secretValue)
{
    throw new Error('JWT_SECRET não configurado')
}

const secret = new TextEncoder().encode(secretValue)

const routeRoles: Record<string, string[]> = {
    '/admin': ['ROLE_ADMIN'],
    '/dashboard': ['ROLE_ADMIN', 'ROLE_USER'],
}

export async function middleware(req: NextRequest) {
    const token = req.cookies.get('access_token')?.value
    const { pathname } = req.nextUrl

    const entry = Object.entries(routeRoles).find(
        ([path]) => pathname === path || pathname.startsWith(`${path}/`)
    )

    if (!entry) return NextResponse.next()

    if (!token)
    {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    try
    {
        const { payload } = await jwtVerify(token, secret)
        const role = payload.role

        if (typeof role !== 'string' || !entry[1].includes(role))
        {
            return NextResponse.redirect(new URL('/403', req.url))
        }

        return NextResponse.next()
    } catch
    {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }
}

export const config = {
    matcher: ['/admin/:path*', '/dashboard/:path*'],
}