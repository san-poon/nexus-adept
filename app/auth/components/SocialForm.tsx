import { GithubIcon } from "lucide-react"
import { GoogleIcon } from '@/app/icons';
import { Button } from "@/components/ui/button";

export default function SocialForm() {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button size="lg" className="w-full" variant="outline">
                <GoogleIcon />
            </Button>
            <Button size="lg" className="w-full" variant="outline">
                <GithubIcon />
            </Button>
        </div>
    );
}