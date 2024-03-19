import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import Header from './Header';
import SocialForm from './SocialForm';

interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
    showSocial?: boolean,
};

export default function CardWrapper(
    { children, headerLabel, backButtonLabel, backButtonHref, showSocial }: CardWrapperProps) {
    return (
        <Card className=" w-96 shadow-lg">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>

            {showSocial && (
                <CardFooter>
                    <SocialForm />
                </CardFooter>
            )}
        </Card>
    )
}