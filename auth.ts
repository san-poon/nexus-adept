import NextAuth from 'next-auth';
import logo from '@/public/logo.png';

import GitHub from 'next-auth/providers/github';

import type { NextAuthConfig } from 'next-auth';

export const config = {
    theme: {
        logo: logo
    },
    providers: [
        GitHub,
    ],
    basePath: "/auth"
}

