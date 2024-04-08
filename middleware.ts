import { auth } from "./auth"

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    console.log("Route: ", req.nextUrl.pathname);
    console.log("Is LOGGEDIN: ", isLoggedIn);
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: [
        // Exclude files with a "." followed by an extension, which are typically static files.
        // Exclude files in the _next directory, which are Next.js internals.
        "/((?!.+\\.[\\w]+$|_next).*)",
        // Re-include any files in the api or trpc folders that might have an extension
        "/(api|trpc)(.*)"
    ],
}