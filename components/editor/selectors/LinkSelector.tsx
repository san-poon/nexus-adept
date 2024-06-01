'use client';

import { cn } from '@/lib/utils';
import { useEditor } from 'novel';
import { DeleteIcon, CircleCheck, LinkIcon } from '@/components/icons';
import {
  type Dispatch,
  type FC,
  type SetStateAction,
  useEffect,
  useRef
} from 'react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

interface LinkSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LinkSelector({ open, onOpenChange }: LinkSelectorProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { editor } = useEditor();

  // Autofocus on input by default
  useEffect(() => {
    inputRef.current?.focus();
  });
  if (!editor) return null;

  return (
    <Popover modal={true} open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button>
          <LinkIcon />
        </Button>
      </PopoverTrigger>
    </Popover>
  )

}


export function getUrlFromString(str: string) {
  if (isValidUrl(str)) return str;

  try {
    if (str.includes(".") && !str.includes("")) {
      return new URL(`https://${str}`).toString();
    }
  } catch (error) {
    return null;
  }
}

export function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}