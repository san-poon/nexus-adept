import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { createHighlighter } from 'shiki';
import { cache } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

export function getUrlFromString(str: string) {
  if (isValidUrl(str)) return str;
  try {
    if (str.includes(".") && !str.includes(" ")) {
      return new URL(`https://${str}`).toString();
    }
  } catch (e) {
    return null;
  }
}

export const shuffleArray = <T>(array: T[]): T[] => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const initializeShikiHighlighter = (async () =>
  await createHighlighter({
    themes: ['github-dark', 'github-light'],
    langs: ['javascript'],
  })
);
export const getShikiHighlighter = cache(initializeShikiHighlighter);

export const highlightCode = async ({ code, lang }: { code: string, lang: string }) => {
  try {
    const highlighter = await getShikiHighlighter();
    const highlightedCode = highlighter.codeToHtml(code, {
      lang: lang,
      themes: {
        dark: 'github-dark',
        light: 'github-light'
      },
    });
    return highlightedCode;
  } catch (error) {
    console.error("Eror occured while highlighting code: ", error);
  }
};

