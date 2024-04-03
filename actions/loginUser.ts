"use server";

import { LoginSchema } from '@/lib/schemas';

export default async function loginUser(
    prevState: {
        message: string;
    },
    formData: FormData
) {
    const parse = LoginSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!parse.success) {
        return { message: 'Invalid email or username' }
    }

    const data = parse.data;
    try {
        await setTimeout(() => {
            console.log(data);
        }, 3000);
        return { message: `Login Success!` }
    } catch (error) {
        return { message: 'Soemthing went wrong. Please try again later!' }
    }
}