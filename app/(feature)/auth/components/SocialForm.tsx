import { GithubIcon } from "lucide-react"
// import { GoogleIcon } from '@/app/icons'; // Google oAuth must be implemented after getting custom domain
import { Button } from "@/components/ui/button";

export default function SocialForm() {
    return (
        <div className="flex items-center w-full gap-x-2 mt-6">
            <Button size="lg" className="w-full" variant="outline">
                <GithubIcon />
            </Button>
        </div>
    );
}