import { BookIcon, ImageBlockIcon, NoteIcon, QuizBlockIcon, TriangleAlertIcon } from "@/components/icons";

import { createSuggestionItems } from "novel/extensions";
import { Command, renderItems } from 'novel/extensions';
import { uploadFn } from "./image-uload";

export const suggestionItems = createSuggestionItems([
  {
    title: 'Image',
    description: "Upload an image.",
    searchTerms: ["photo", "picture", "media", "image"],
    icon: <ImageBlockIcon />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).run();
      // upload image
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = async () => {
        if (input.files?.length) {
          const file = input.files[0];
          const pos = editor.view.state.selection.from;
          uploadFn(file, editor.view, pos);
        }
      };
      input.click();
    },
  },
  {
    title: 'Quiz',
    description: "Create MCQs",
    searchTerms: ["quiz", "mcq"],
    icon: <QuizBlockIcon />,
  },
  {
    title: 'Note',
    description: 'Nota Bene',
    searchTerms: ['note', 'remember', 'NB', 'nb'],
    icon: <NoteIcon />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleIconBlock('icon-note').run();
    }
  },
  {
    title: 'Pitfall',
    description: 'Caution',
    searchTerms: ['pitfall', 'caution', 'recommendation'],
    icon: <NoteIcon />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleIconBlock('icon-pitfall').run();
    }
  },
  {
    title: 'Deep-Dive',
    description: 'Dive deeper',
    searchTerms: ['deepdive',],
    icon: <BookIcon />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleIconBlock('icon-deepdive').run();
    }
  },
  {
    title: 'Destructive',
    description: 'Danger. Warning.',
    searchTerms: ['destructive', 'danger', 'warning'],
    icon: <TriangleAlertIcon />,
    command: ({ editor, range }) => {
      editor.chain().focus().deleteRange(range).toggleIconBlock('icon-destructive').run();
    }
  },

]);

export const slashCommand = Command.configure({
  suggestion: {
    items: () => suggestionItems,
    render: renderItems,
  },
});