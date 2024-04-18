import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription
} from '@/components/ui/card';
import SocialForm from './SocialForm';

export default function SigninForm() {
    return (
        <Card className="justify-center w-full md:w-8/12 lg:w-1/2 shadow-lg min-h-96">
            <CardHeader className='w-full flex flex-col items-center'>
                <CardTitle>
                    Signin
                </CardTitle>
                <CardDescription>
                    Join the journey to Adept
                </CardDescription>
            </CardHeader>
            <CardContent className=' pt-10'>
                <SocialForm />
            </CardContent>
        </Card>
    );
}

