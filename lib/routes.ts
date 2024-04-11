
/**
 * Array of routes accessible to the public.
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = [
    "/",
    "/others/portfolio",
    "/quiz/mcqs/play",
];

/**
 * Array of routes used for authentication.
 * These routes must redirect logged in users to '/dashboard'
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register"
];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "/auth/api/";

/**
 * The default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard';