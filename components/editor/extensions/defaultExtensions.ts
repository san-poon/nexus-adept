import {
  TiptapImage,
  CodeBlockLowlight,
  TiptapLink,
  UpdatedImage,
  HorizontalRule,
  StarterKit,
  Placeholder,
} from "novel/extensions";
import { UploadImagesPlugin } from 'novel/plugins';
import { common, createLowlight } from 'lowlight';

import { IconBlock } from './extension-icon-block';

const placeholder = Placeholder;
const tiptapLink = TiptapLink.configure({
  HTMLAttributes: {
    class:
      " no-underline hover:underline underline-offset-4 text-cyan-600 dark:text-cyan-100 transition-colors cursor-pointer",
  },
});

const tiptapImage = TiptapImage.extend({
  addProseMirrorPlugins() {
    return [
      UploadImagesPlugin({
        imageClass: "opacity-40 rounded-lg border border-stone-200",
      }),
    ];
  },
}).configure({
  allowBase64: true,
  HTMLAttributes: {
    class: "rounded-lg border",
  },
});

const updatedImage = UpdatedImage.configure({
  HTMLAttributes: {
    class: "rounded-lg border border-neutral-500",
  }
});

const horizontalRule = HorizontalRule.configure({
  HTMLAttributes: {
    class: "mt-4 mb-6 border-t border-muted-foreground",
  },
});

const starterKit = StarterKit.configure({
  paragraph: {
    HTMLAttributes: {
      class: "text-neutral-950 dark:text-neutral-200",
    }
  },
  heading: {
    levels: [1, 2, 3],
    HTMLAttributes: {
      class: " text-neutral-900 dark:text-neutral-200 font-medium",
    }
  },
  bold: {
    HTMLAttributes: {
      class: "text-neutral-900 dark:text-neutral-200 font-bold",
    }
  },
  bulletList: {
    HTMLAttributes: {
      class: "list-disc list-outside leading-3 -mt-2",
    },
  },
  orderedList: {
    HTMLAttributes: {
      class: "list-decimal list-outside leading-3 -mt-2",
    },
  },
  listItem: {
    HTMLAttributes: {
      class: "leading-normal -mb-2",
    },
  },
  blockquote: {
    HTMLAttributes: {
      class: "border-l-4 border-primary",
    },
  },
  codeBlock: {
    HTMLAttributes: {
      class: "rounded-lg border border-neutral-500 p-5 font-mono font-medium",
    },
  },
  code: {
    HTMLAttributes: {
      class: "rounded-lg bg-wash-50 dark:bg-wash-760 px-1.5 py-1 font-mono font-medium",
      spellcheck: "false",
    },
  },
  horizontalRule: false,
  dropcursor: {
    color: "#DBEAFE",
    width: 4,
  },
  gapcursor: false,
});



const codeBlockLowlight = CodeBlockLowlight.configure({
  // use highlightJS in case there is a need to specify certain language grammars only
  // configure lowlight: common (covers 37 language grammars which should be enough in most cases)
  lowlight: createLowlight(common),
});


export const defaultExtensions = [
  starterKit,
  placeholder,
  tiptapLink,
  tiptapImage,
  updatedImage,
  horizontalRule,
  codeBlockLowlight,
  IconBlock,

];

