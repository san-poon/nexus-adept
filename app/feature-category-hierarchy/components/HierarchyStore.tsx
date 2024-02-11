import { useTransition } from "react";
import { storeHierarchyTree } from "../actions";

import { HierarchyTreeData } from "../lib/types";
import { Button } from "@/components/ui/button";


export default function HierarchyStore({ hierarchies }: { hierarchies: HierarchyTreeData }) {
    const [isPending, startTransition] = useTransition();

    const handleSaveClick = () => {
        startTransition(async () => {
            await storeHierarchyTree(hierarchies);
        });
    };

    return (
        <>
            <Button className="dark:bg-neutral-900 bg-emerald-300"
                onClick={handleSaveClick}
                disabled={isPending}
            >
                Save
            </Button>
        </>
    )
}