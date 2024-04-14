import HeroSection from './components/HeroSection';

/*
* The is the home page.
*  If you use multiple root layouts ( "app/(anon)/layout.tsx" and "app/(authenticated)/layout.tsx" ) without a top-level layout.js file,
*  your home page.js file should be defined in one of the route groups, For example: app/(anon)/page.js.
*/
export default function HomePage() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
