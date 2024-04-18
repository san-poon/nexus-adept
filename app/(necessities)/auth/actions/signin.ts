"use server";

import { revalidatePath } from 'next/cache';

import { signIn } from "@/auth";

export default async function signinWithGitHub() {
    await signIn("github", { redirectTo: "/dashboard" });
}
