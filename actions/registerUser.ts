"use server";

import { RegisterSchema } from '@/lib/schemas';

export default async function registerUser(
    prevState: {
        message: string;
    },
    formData: FormData
) {
    console.log(formData);
    const parse = RegisterSchema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!parse.success) {
        return { message: 'Invalid email or, too short/long password.' }
    }

    const data = parse.data;
    try {
        await setTimeout(() => {
            console.log(data);
        }, 3000);
        return { message: `Registration Complete!` }
    } catch (error) {
        return { message: 'Something went wrong. Please try again later!' }
    }
}