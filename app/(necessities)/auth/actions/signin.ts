"use server";

import { signIn } from "@/auth";

export async function signinWithGitHub() {
    await signIn("github", { redirectTo: "/dashboard" });
}
export async function signinWithGoogle() {
    await signIn("google", { redirectTo: "/dashboard" });
}


