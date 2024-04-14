"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { signIn } from "@/auth";

export default async function loginWithGitHub() {
    await signIn("github");
}

// import { LoginSchema } from '@/lib/zod-schemas';

// export default async function login(
//     prevState: {
//         message: string;
//     },
//     formData: FormData
// ) {
//     const supabase = createClient();

//     const parse = LoginSchema.safeParse({
//         email: formData.get('email'),
//         password: formData.get('password'),
//     });

//     if (!parse.success) {
//         return { message: 'Invalid email or username!' }
//     }

//     const data = parse.data;
//     try {
//         const { error } = await supabase.auth.signInWithPassword(data);
//         if (error) {
//             return { message: `Something went wrong... ${error}` };
//         }
//         revalidatePath('/', 'layout');
//         // return { message: `Login Success!` }
//         redirect('/dashboard');
//     } catch (error) {
//         return { message: `Something went wrong. Please try again later! + ${error}` }
//     }
// }