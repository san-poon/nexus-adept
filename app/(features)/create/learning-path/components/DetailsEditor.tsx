import { GearIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
                    <DialogTitle>Edit Learning Path Details</DialogTitle>
                </DialogHeader>
                <form>
                    <div className="my-4 space-y-2">
                        <Label htmlFor="topics">Topics:
                            <span className="font-normal text-sm opacity-70">&#40;Separate with comma and space.&#41;</span>
                        </Label>
                        <Input id="topics" placeholder="Front-end development, Javascript" className="w-full" />
                    </div>
                    <DialogFooter>
                        <Button type="submit" variant="secondary" size="sm">Confirm</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}