// -----------------------------Start: 53_1---------------------------------------
// (8)st import it as betterauth documentation
import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
// (8)en then create :( lib/auth-client.js)
// ---------------------End:53_1-(1) to () --------------------------------

