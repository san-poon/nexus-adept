import { createClient } from "@/data-access/supabase/server"

export default async function Dashboard() {
    const supabase = createClient();
    const user = await supabase.auth.getUser();
    return (
        <section className="h-screen my-4">
            <p>You are logged in with email: {user.data.user?.email}</p>
        </section>
    )
}