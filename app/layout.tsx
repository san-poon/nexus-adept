import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Autodidact: Learn, Create and Collaborate - i wanna learn',
  description: 'Expand your knowledge and unleash your creativity with our comprehesive learning resources and collaborative platform. Start your journey today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
