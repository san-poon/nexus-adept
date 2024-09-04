// "use client";
// import { useFormState, useFormStatus } from "react-dom";
import { GithubIcon } from "lucide-react"
import { GoogleIcon } from '@/components/icons';
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { signinWithGitHub, signinWithGoogle, signinWithEmail } from "../actions/signin";
// import SubmitButton from "@/components/ui/SubmitButton";

// const initialState = {
//     message: "",
// };

export default function SocialForm() {
    // const [state, signinWithEmailAction] = useFormState(signinWithEmail, initialState);
    return (
        <section className=" space-y-12">
            <form action={signinWithGoogle}>
                <Button size="lg" className="w-full" variant="outline">
                    Sign In with &nbsp;<GoogleIcon />
                </Button>
            </form>
            <form action={signinWithGitHub}>
                <Button size="lg" className="w-full" variant="outline">
                    Sign In with &nbsp; <GithubIcon />
                </Button>
            </form>
            {/* <hr className="dark:border-neutral-600" />
            <form action={signinWithEmailAction} className="space-y-6">
                <Input type="email" name="email" placeholder="Email" />
                <SubmitButton label="Sign In with Email" />
                {state.message && <p>{state?.message}</p>}
                <p aria-live="polite" className="sr-only" role="status">
                    {state?.message}
                </p>
            </form> */}
        </section>
    );
}