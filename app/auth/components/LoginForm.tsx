import CardWrapper from "./CardWrapper";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormMessage
} from '@/components/ui/form';

export default function LoginForm() {


    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            Login Form!
        </CardWrapper>
    )
}