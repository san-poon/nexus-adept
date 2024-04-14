import type { Metadata } from 'next';
import '../globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/theme-provider';
import { rubik } from '@/app/fonts';

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
          <main className="dark:text-neutral-200 text-base md:text-lg">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
