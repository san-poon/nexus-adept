"use server";

import { z } from 'zod';

import { signIn } from "@/auth";

export async function signinWithGitHub() {
    await signIn("github", { redirectTo: "/dashboard" });
}

export async function signinWithGoogle() {
    await signIn("google", { redirectTo: "/dashboard" });
}

export async function signinWithEmail(
    prevState: { message: string },
    formData: FormData,
) {
    const schema = z.object({
        email: z.string().email(),
    });

    const parse = schema.safeParse({
        email: formData.get("email"),
    });
    if (!parse.success) {
        return { message: "Not a valid email." }
    }
    try {
        await signIn('resend', formData);
        return { message: 'Verification email sent. Please check your email.' };
    } catch (error) {
        return { message: "Failed to send email verification." }
    }
}