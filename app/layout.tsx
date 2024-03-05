import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/theme-provider';
import { inter } from '@/app/fonts';

export const metadata: Metadata = {
  title: 'Autodidact: Play, Learn, Forge',
  description: 'Expand your knowledge and unleash your creativity with our comprehesive learning resources and collaborative platform. Start your journey today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${inter.className}  flex flex-col min-h-screen dark:text-neutral-100 bg-cyan-50 dark:bg-[#212e2f]`}>
        <ThemeProvider attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className={` flex-1 text-lg`}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
