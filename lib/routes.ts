
/**
 * Array of routes accessible to the public.
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = [
    "/",
    "/others/portfolio",
    "/quiz/mcqs/play", // This feature must not be public in future.
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

/**
 * Array of routes for content-creation.
 * These routes are empty by defaults meaning it is just pure creation (no data fetching),
 * and not a contribution to already existing contents.
 * These routes must be available to everyone, logged-in and anonymous alike.
 * 
 * The 'Save' action in these routes checks if users are logged in,
 * if they are not, they are routed to '/auth/login'.
 */

export const publicCreationRoutes = [
    '/lesson/create',
    '/category-hierarchy/create',
];