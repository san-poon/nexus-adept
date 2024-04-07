"use server";
import bcrypt from 'bcrypt';
import db from '@/db/drizzle';

import { RegisterSchema } from '@/lib/zod-schemas';
import { eq } from 'drizzle-orm';
import { users } from '@/db/schema';

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

    const { firstName, lastName, email, password } = parse.data;
    const hashedPassword = await bcrypt.hash(password, 8);
    const existingUser = await db.query.users.findFirst({
        where: eq(users.email, email),
    });

    try {
        return { message: `Registration Complete!` }
    } catch (error) {
        return { message: 'Something went wrong. Please try again later!' }
    }
}