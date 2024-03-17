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
          50: '#b7f7f7',
          100: '#b0eded',
          150: '#a8e3e3',
          200: '#a1d9d9',
          250: '#99cfcf',
          300: '#92c5c5',
          350: '#8bbbbb',
          400: '#749d9d',
          450: '#749d9d',
          550: '#577575',
          500: '#668989',
          600: '#486161',
          650: '#394d4d',
          700: '#324343',
          750: '#2a3939',
          800: '#232f2f',
          850: '#1b2525',
          900: '#182020',
          950: '#141b1b'
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
