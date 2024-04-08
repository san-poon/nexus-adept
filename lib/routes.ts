/**
 * Array of routes accessible to the public.
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
];

/**
 * Array of routes used for authentication.
 * These routes will redirect logged in users to '/settings'
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
];


/**
 * The prefix for API authentication routes
 * Routes starting with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * Default redirect path right after loggin in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';