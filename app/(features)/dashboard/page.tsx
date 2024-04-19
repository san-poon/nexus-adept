import { redirect } from "next/navigation";
import { auth } from '@/auth';

export default async function Dashboard() {
    const session = await auth();
    const isUserSignedIn = session?.user;
    if (!isUserSignedIn) {
        redirect('/auth/signin');
    }
    return (
        <section>
            <p>This is a dashboard page.</p>
        </section>
    );
}