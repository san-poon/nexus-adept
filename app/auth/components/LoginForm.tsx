"use client";

import CardWrapper from "./CardWrapper";
import loginUser from '@/actions/loginUser';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormError from '@/components/ui/FormError';
import FormSuccess from '@/components/ui/FormSuccess';
import { useFormStatus, useFormState } from 'react-dom';
import { cn } from '@/lib/utils';

const initialState = {
    message: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button
            variant="secondary"
            type="submit"
            className={cn('w-full')}
            aria-disabled={pending}
        >
            {pending ? "Logging in..." : "Login"}
        </Button>
    )
}

export default function LoginForm() {
    const [state, formAction] = useFormState(loginUser, initialState);

    return (
        <CardWrapper
            headerLabel="Welcome back!"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <form action={formAction} className='space-y-6'>
                <div className='space-y-4 mb-8'>
                    <div>
                        <label className='text-base' htmlFor='user email'>Email</label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="san@gmail.com"
                            type="email"
                            required
                        />
                    </div>
                    <div>
                        <label className='text-base' htmlFor='user password'>Password</label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                        />
                    </div>
                </div>
                <SubmitButton />
                {state?.message === "Login Success!"
                    ? <FormSuccess message={state.message} />
                    : <FormError message={state.message} />
                }
            </form>
        </CardWrapper>
    )
}

