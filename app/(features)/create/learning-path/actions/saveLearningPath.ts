"use server";

import { auth } from '@/auth';

export default async function saveLearningPath() {
    const session = await auth();
    if (session?.user) return session?.user?.email;
    else throw new Error(`couldn't retireve your email`);
}