// -----------------------------Start: 54_1---------------------------------------
// (1)st from nex.js documentation
import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
// (2)commit
// import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
// export function proxy(request: NextRequest) {
// (3)
// export function proxy(request) {
// (4)
export async function proxy(request) {
    // (5)st if user login
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // (5)en
    
//   return NextResponse.redirect(new URL('/home', request.url))
  //   (6)st commit previous line
  if(!session){
    return NextResponse.redirect(new URL('/login', request.url))

    }
//   (6)en
}
 
export const config = {
//   matcher: '/about/:path*',
// (7) then check
//   matcher: ['/my-bookings'],
// (8) then (start: 54_2) and go to [id] page 
  matcher: ['/my-bookings', '/add-destination', '/destinations/:path'],
}
// (1)en
// ---------------------End:54_1-(1) to () --------------------------------
