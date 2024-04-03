"use server";

import * as z from 'zod';
import { LoginSchema } from '@/lib/schemas';

export default async function login(formData: z.infer<typeof LoginSchema>) {
    setTimeout(() => {
        console.log(formData);
    }, 2000);
}