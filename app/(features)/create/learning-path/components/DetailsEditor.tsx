import { GearIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function DetailsEditor() {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="icon">
                    <GearIcon className="w-6 h-6" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Topics</DialogTitle>
                    <DialogDescription>
                        Start from a high level category. Then specifics.
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <div className="my-4">
                        <Input id="topics" placeholder="Front-end development, Javascript" className="w-full" />
                        <span className="text-xs ps-4">Separate with comma and space.</span>
                    </div>
                    <DialogFooter>
                        <Button type="submit" variant="secondary" size="sm">Confirm</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}