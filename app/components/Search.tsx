'use client';
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className='flex items-center h-9 w-full md:w-96 lg:w-[36rem] border rounded-full border-neutral-300 dark:border-neutral-700 ps-2 md:ps-4'>
      <SearchIcon />
      <Input
        className='border-none focus-visible:outline-0 dark:focus-visible:outline-0'
      />
    </div>
  );
}

export const samplePaths = [
  'JavaScript: Programming Language',
  'React: UI library',
  'CSS: Cascading Stylesheet',
  'Full-stack with Next.js',
  'Full-stack with React Router',
  'SQL: Structured Query Language',

]