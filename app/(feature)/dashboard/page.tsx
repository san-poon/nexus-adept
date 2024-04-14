import { getProfileDTO } from "@/data-access/dto";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const user = await getProfileDTO();

    if (!user) {
        // This statement can also execute if the logged-in user has no internet connection
        redirect('/auth/login');
    }
    return (
        <section className="h-screen my-4">
            <p>You are logged in with email: {user.email} confirmed at: {user.emailConfirmedAt}</p>
        </section>
    )
}