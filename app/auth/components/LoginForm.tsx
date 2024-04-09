"use client";
import { useFormState } from 'react-dom';

import CardWrapper from "./CardWrapper";
import login from '@/actions/login';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FormError from '@/components/ui/FormError';
import FormSuccess from '@/components/ui/FormSuccess';
import SubmitButton from '@/components/ui/SubmitButton';


const initialState = {
    message: "",
};

export default function LoginForm() {
    const [state, formAction] = useFormState(login, initialState);

    return (
        <CardWrapper
            cardTitle="Login"
            cardDescription="Welcome back!"
            redirectLabel="Don't have an account? Sign Up"
            redirectHref="/auth/register"
            showSocial
        >
            <form action={formAction} className='space-y-6'>
                <div className='space-y-4 mb-8'>
                    <div>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="johndoe@gmail.com"
                            type="email"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                        />
                    </div>
                </div>
                <SubmitButton submitLabel='Login' />
                {state?.message === "Login Success!"
                    ? <FormSuccess message={state.message} />
                    : <FormError message={state.message} />
                }
            </form>
        </CardWrapper>
    )
}

