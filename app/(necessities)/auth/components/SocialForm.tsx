import { GithubIcon } from "lucide-react"
import { GoogleIcon } from '@/components/icons//icons';
import { Button } from "@/components/ui/button";
import { signinWithGitHub, signinWithGoogle } from "../actions/signin";

export default function SocialForm() {
    return (
        <section className=" space-y-12">
            <form action={signinWithGoogle}>
                <Button size="lg" className="w-full" variant="outline">
                    <GoogleIcon />
                </Button>
            </form>
            <form action={signinWithGitHub}>
                <Button size="lg" className="w-full" variant="outline">
                    <GithubIcon />
                </Button>
            </form>
        </section>
    );
}