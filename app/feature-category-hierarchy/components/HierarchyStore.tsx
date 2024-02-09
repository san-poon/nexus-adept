import { useTransition } from "react";
import { storeHierarchyTree } from "../actions/storeHierarchyTree";

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
            <Button className=""
                onClick={handleSaveClick}
                disabled={isPending}
            >
                Save
            </Button>
        </>
    )
}