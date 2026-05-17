// // -----------------------------Start: 53_1---------------------------------------
// // (9)st import it as betterauth documentation
// import { createAuthClient } from "better-auth/react"
// export const authClient = createAuthClient({
//     /** The base URL of the server (optional if you're using the same domain) */
//     // baseURL: "http://localhost:3000"
//     // (10)then start: (53_2) and create app/signup/page.jsx
//     baseURL: process.env.BETTER_AUTH_URL
//     // baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL
// })

// export const { signIn, signUp, useSession } = createAuthClient()

// // (9)en 
// // ---------------------End:53_1-(1) to () --------------------------------
// -----------------------------Start: 54_4---------------------------------------
// import it as betterauth documentation
import { jwtClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    
    baseURL: process.env.BETTER_AUTH_URL,
    // (3)st
    plugins: [
        jwtClient()
    ]
    // (3)en then go to [id] page    
});

export const { signIn, signUp, useSession } = createAuthClient()
 
// ---------------------End:54_4-(1) to () --------------------------------