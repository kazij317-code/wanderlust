// -----------------------------Start: 53_1---------------------------------------
// (9)st import it as betterauth documentation
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    // baseURL: "http://localhost:3000"
    // (10)then start: (53_2) and create app/signup/page.jsx
    baseURL: process.env.BETTER_AUTH_URL
    // baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL
})

export const { signIn, signUp, useSession } = createAuthClient()

// (9)en 
// ---------------------End:53_1-(1) to () --------------------------------