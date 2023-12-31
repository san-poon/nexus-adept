import { toast } from "sonner";
import { EditorState, Plugin, PluginKey } from "@tiptap/pm/state";
import { Decoration, DecorationSet, EditorView } from "@tiptap/pm/view";
import { v4 as uuidv4 } from "uuid";

const uploadKey = new PluginKey("upload-image");

export function startImageUpload(file: File, view: EditorView, pos: number) {
    // check if the file is an image
    if (!file.type.includes("image/")) {
        toast.error('File type not supported.');
        return;
    }
    // check if the file size is less than 5MB
    else if (file.size / 1024 / 1024 > 5) {
        toast.error("File size too big (max 5MB).");
        return;
    }

    // A fresh object to act as the ID for this upload
    const id = uuidv4();

    // Replace the selection with a placeholder
    const tr = view.state.tr;
    if (!tr.selection.empty) tr.deleteSelection();

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        tr.setMeta(uploadKey, {
            add: {
                id,
                pos,
                src: reader.result,
            },
        });
        view.dispatch(tr);
    };
}