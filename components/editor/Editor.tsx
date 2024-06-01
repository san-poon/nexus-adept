"use client";

import { useState, useEffect } from 'react';
import {
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  EditorInstance,
  EditorRoot,
  JSONContent
} from 'novel';
import { useDebouncedCallback } from "use-debounce";
import { defaultEditorContent } from './lib/editor-content';
import { defaultExtensions } from './extensions/defaultExtensions';
import { handleCommandNavigation } from 'novel/extensions';
import { handleImageDrop, handleImagePaste } from 'novel/plugins';
import { uploadFn } from './image-uload';
import { slashCommand, suggestionItems } from './slash-command';

const extensions = [...defaultExtensions, slashCommand];

export default function Editor() {
  const [initialContent, setInitialContent] = useState<null | JSONContent>(defaultEditorContent);
  const [saveStatus, setSaveStatus] = useState("Saved");

  const debouncedUpdates = useDebouncedCallback(async (editor: EditorInstance) => {
    const json = editor.getJSON();
    window.localStorage.setItem("editor-content", JSON.stringify(json));
    setSaveStatus("Saved");
  }, 10000);

  useEffect(() => {
    const content = window.localStorage.getItem("editor-content");
    if (content) setInitialContent(JSON.parse(content));
    else setInitialContent(defaultEditorContent);
  }, []);

  if (!initialContent) return null;

  return (
    <div className='relative w-full max-w-screen-lg'>
      <div className="flex absolute right-5 top-5 z-10 mb-5 gap-2">
        <div className="rounded-full bg-wash-50 dark:bg-wash-900 px-2 py-1 text-sm ">{saveStatus}</div>
      </div>
      <EditorRoot>
        <EditorContent
          initialContent={initialContent}
          extensions={extensions}
          className='border-none min-h-[92vh] w-full max-w-screen-lg sm:mb-[calc(80vh)]'
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            attributes: {
              class: "prose prose-md dark:prose-invert prose-headings:font-title focus:outline-none max-w-full"
            },
            handlePaste: (view, event) => handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) => handleImageDrop(view, event, moved, uploadFn),
          }}
          onUpdate={({ editor }) => {
            debouncedUpdates(editor);
            setSaveStatus("Unsaved");
          }}
        >
          <EditorCommand className='z-50 h-auto max-h-[330px] w-72 overflow-y-auto rounded-2xl dark:bg-wash-750 bg-wash-70 px-1 py-2 md:p-4 transition-all'>
            <EditorCommandEmpty className='px-2'>No results</EditorCommandEmpty>
            <EditorCommandList>
              {suggestionItems.map(item => (
                <EditorCommandItem
                  key={item.title}
                  value={item.title}
                  onCommand={(val) => item.command && item.command(val)}
                  className="flex w-full items-center space-x-2 rounded-lg px-2 py-2 text-left text-sm aria-selected:bg-emerald-200 dark:aria-selected:bg-emerald-800"
                >
                  <div>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className='text-xs'>{item.description}</p>
                  </div>
                </EditorCommandItem>
              ))}
            </EditorCommandList>
          </EditorCommand>
        </EditorContent>
      </EditorRoot>
    </div>
  );
}