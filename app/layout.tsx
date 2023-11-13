'use client';

import { useState, useEffect } from 'react'; // Import React and other necessary dependencies
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import ThemeSwitcher from './ThemeSwitcher';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Autodidact: Learn & Create',
//   description: 'From foundational to professional level, learn, create & collaborate and learn more...',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Define a state variable to track the dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle the dark mode state
    // Update localStorage to remember user preference
    localStorage.theme = darkMode ? 'light' : 'dark';
  };

  // Add an effect to apply dark mode when the component mounts
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} ${darkMode ? 'dark' : 'light'}`}>
        {/* Button to toggle dark mode */}
        <ThemeSwitcher darkMode={darkMode} onToggle={toggleDarkMode} />
        {children}
      </body>
    </html>
  );
}
