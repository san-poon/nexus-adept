import { redirect } from 'next/navigation';
import HeroSection from './components/HeroSection';
import { auth } from '@/auth';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

export default async function HomePage() {

  const session = await auth();
  if (session?.user) {
    redirect('/dashboard');
  }

  return (
    <div className='z-10 sticky top-16 w-full h-32 flex justify-center items-end'>
      <div className='flex items-center w-full md:w-[32rem] bg-wash-70 dark:bg-wash-750 rounded-full focus-within:shadow-2xl ps-2 md:ps-4 md:p-2'>
        <SearchIcon />
        <Input
          type='search'
          placeholder='Search learning path...'
          autoFocus
          className='border-none focus-visible:outline-0 dark:focus-visible:outline-0'
        />
      </div>
    </div>
  );
}
