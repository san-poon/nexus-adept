import { GithubIcon } from "lucide-react"
import { GoogleIcon } from '@/components/icons//icons';
import { Button } from "@/components/ui/button";
import loginWithGitHub from "../actions/login";

export default function SocialForm() {
    return (
        <section className=" space-y-12">
            <form>
                <Button size="lg" className="w-full" variant="outline">
                    <GoogleIcon />
                </Button>
            </form>
            <form action={loginWithGitHub}>
                <Button size="lg" className="w-full" variant="outline">
                    <GithubIcon />
                </Button>
            </form>
        </section>
    );
}