/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        //bleu principal
        indigo: {
          50: '#f0f5fa',
          100: '#d9e7f4',
          200: '#b8d4ea',
          300: '#8eb9dd',
          400: '#3B77BB',
          500: '#3B77BB',
          600: '#2d5d96',
          700: '#254a76',
          800: '#1e3b5f',
          900: '#1a3150',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#e5e7eb',
          800: '#f3f4f6',
          900: '#ffffff',
        },
        //couleur secondaire
        secondary: {
          DEFAULT: '#64C095',
          light: '#78d4a8',
          dark: '#50a67b',
        }
      }
    }
  },
  plugins: [],
}
