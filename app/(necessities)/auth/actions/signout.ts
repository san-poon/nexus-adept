"use server";

import { signOut } from '@/auth';

export default async function signout() {
    await signOut();
}