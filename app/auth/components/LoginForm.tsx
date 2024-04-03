"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import CardWrapper from "./CardWrapper";
import { LoginSchema } from "@/lib/schemas";
import login from '@/actions/login';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormError from '@/components/ui/FormError';
import FormSuccess from '@/components/ui/FormSuccess';
import { useFormStatus } from 'react-dom';
import { cn } from '@/lib/utils';

export default function LoginForm() {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        login(values);
    }

    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="san@gmail.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Your email.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="*****************"
                                            type='password'
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Your Password
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message='' />
                    <FormSuccess message='' />
                    <Submit />
                </form>
            </Form>
        </CardWrapper>
    )
}

function Submit() {
    const { pending } = useFormStatus();
    return (
        <Button
            variant="secondary"
            type="submit"
            className={cn('w-full')}
            disabled={pending}
        >
            Login
        </Button>
    )
}