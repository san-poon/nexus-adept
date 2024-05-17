import type { Metadata } from 'next';
import { rubik } from '@/app/fonts';
import { Toaster } from 'sonner';

import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/theme-provider';

export const metadata: Metadata = {
  title: 'Nexus Adept: Collaborate & Master, Together!',
  description: 'Hone your skills with curated learning path designed through collaboration or simply become the collaborator, a master.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${rubik.className}  flex flex-col min-h-screen dark:bg-wash-800 `}>
        <ThemeProvider attribute='class'
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="dark:text-neutral-200 text-base">
            {children}
          </main>
          <Footer />
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
