import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

//BURASI MANTIK KISMI BUNU NEXTJS SAYFASINDAN KOPYALADIM
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname
    const isPublicPath = path === '/login'|| path === '/signup' || path === '/verifymail'
    const token = request.cookies.get('token')?.value || '' //boş olabiilir yada olmayabilir
    if (isPublicPath && token) {

         return NextResponse.redirect(new URL('/',request.nextUrl))
    }
    //OTURUM ACMAYA YÖNLENDİRİR
    if (!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login',request.nextUrl))
        
    }
}
//BURASIDA EŞLEŞEN KISIM HANGİ ROTAYI EŞLEŞTİRMEK İSTİYOSUN
// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup',
        '/verifymail',
    ],
}
