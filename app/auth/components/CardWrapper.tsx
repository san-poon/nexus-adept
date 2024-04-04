import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    CardDescription
} from '@/components/ui/card';
import SocialForm from './SocialForm';
import RedirectButton from './RedirectButton';

interface CardWrapperProps {
    children: React.ReactNode,
    cardTitle: string,
    cardDescription: string,
    redirectLabel: string,
    redirectHref: string,
    showSocial?: boolean,
};

export default function CardWrapper(
    { children, cardTitle, cardDescription, redirectLabel, redirectHref, showSocial }: CardWrapperProps) {
    return (
        <Card className=" w-full md:w-8/12 lg:w-1/2 shadow-lg">
            <CardHeader className='w-full flex flex-col items-center'>
                <CardTitle>
                    {cardTitle}
                </CardTitle>
                <CardDescription>
                    {cardDescription}
                </CardDescription>
            </CardHeader>

            <CardContent>
                {children}

                {showSocial && (
                    <SocialForm />
                )}
            </CardContent>
            <CardFooter>
                <RedirectButton label={redirectLabel} href={redirectHref} />
            </CardFooter>
        </Card>
    )
}