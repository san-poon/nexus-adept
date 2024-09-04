import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import signout from '../actions/signout';
import { Button } from '@/components/ui/button';

export default async function SignoutPage() {
    const session = await auth();

    if (!session?.user) {
        redirect('/auth/signin')
    }

    return (
        <form action={signout}>
            <Button type="submit" variant="destructive">
                Sign out
            </Button>
        </form>
    );
}