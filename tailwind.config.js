/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Tajawal"', '"Cairo"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bcdfff',
          300: '#8ecbff',
          400: '#59abff',
          500: '#3389fc',
          600: '#1d6bf5',
          700: '#1654e1',
          800: '#1945b6',
          900: '#1a408f',
        },
        accent: {
          50: '#ecfff6',
          100: '#d0ffe8',
          200: '#a6ffd2',
          300: '#67f9b3',
          400: '#2eed8e',
          500: '#0fd672',
          600: '#04ac58',
          700: '#038748',
          800: '#076a3b',
          900: '#085733',
        },
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae3',
          300: '#b0bac9',
          400: '#8593aa',
          500: '#66758f',
          600: '#525e75',
          700: '#434c5f',
          800: '#3a4150',
          900: '#343944',
        },
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(16,24,40,0.06), 0 4px 16px -4px rgba(16,24,40,0.05)',
        card: '0 1px 3px rgba(16,24,40,0.04), 0 6px 24px -8px rgba(16,24,40,0.08)',
      },
    },
  },
  plugins: [],
}
