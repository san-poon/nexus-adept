import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Brand color:  Hue -> 180 (Cyan) Platform Color: Saturation -> 65 
        wash: {
          50: '#e5fafa',
          100: '#d8f0f0',
          150: '#cfe6e6',
          200: '#c6dcdc',
          250: '#99cfcf',
          300: '#92c5c5',
          350: '#8bbbbb',
          400: '#749d9d',
          450: '#749d9d',
          500: '#577575',
          550: '#668989',
          600: '#486161',
          650: '#303939',
          700: '#2b3434',
          750: '#272f2f',
          800: '#232a2a',
          850: '#1f2525',
          900: '#1b2020',
          950: '#171b1b'
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 as unknown as string },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 as unknown as string },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
