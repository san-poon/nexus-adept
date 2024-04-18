import { GithubIcon } from "lucide-react"
import { GoogleIcon } from '@/components/icons//icons';
import { Button } from "@/components/ui/button";
import signinWithGitHub from "../actions/signIn";

export default function SocialForm() {
    return (
        <section className=" space-y-12">
            <form>
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