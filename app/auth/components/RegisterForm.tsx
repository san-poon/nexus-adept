"use client";

import { useFormState } from 'react-dom';
import signup from '@/actions/signup';

import CardWrapper from "./CardWrapper";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FormError from '@/components/ui/FormError';
import FormSuccess from '@/components/ui/FormSuccess';
import SubmitButton from '@/components/ui/SubmitButton';

const initialState = {
    message: "",
};

export default function RegisterForm() {
    const [state, formAction] = useFormState(signup, initialState);

    return (
        <CardWrapper
            cardTitle="Sign Up"
            cardDescription="Create an account"
            redirectLabel="Already have an account? Sign In"
            redirectHref="/auth/login"
            showSocial
        >
            <form action={formAction} className='space-y-6'>
                <div className='space-y-4 mb-8'>
                    <div>
                        <Label htmlFor='firstName'>First Name</Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            type="text"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            type="text"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="johndoe@example.com"
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
                <SubmitButton submitLabel='Sign Up' />
                {state?.message === "Registration Complete!"
                    ? <FormSuccess message={state.message} />
                    : <FormError message={state.message} />
                }
            </form>
        </CardWrapper>
    )
}

