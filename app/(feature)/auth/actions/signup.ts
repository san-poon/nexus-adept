"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/data-access/supabase/server';

import { RegisterSchema } from '@/lib/zod-schemas';


export default async function signup(
    prevState: {
        message: string;
    },
    formData: FormData
) {
    const supabase = createClient();

    // Validate user inputs
    const parse = RegisterSchema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!parse.success) {
        return { message: 'Invalid email or, too short/long password.' }
    }

    const validatedData = parse.data;

    const { error } = await supabase.auth.signUp(validatedData);

    if (error) {
        return { message: 'Something went wrong. Please use other medium to sign up.' }
    }

    revalidatePath('/', 'layout');
    redirect('/dashboard');
}