import { redirect } from 'next/navigation';
import HeroSection from './components/HeroSection';
import { auth } from '@/auth';

export default async function HomePage() {

  const session = await auth();
  if (session?.user) {
    redirect('/dashboard');
  }

  return (
    <main>
      <HeroSection />
    </main>
  );
}
