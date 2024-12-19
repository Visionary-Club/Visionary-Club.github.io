/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Add the font size classes to safelist
    'text-l',
    'text-xl',
    'text-2xl',
    'text-3xl',
    'text-4xl',
    'text-5xl',
    'text-6xl',
    'text-7xl',
    'text-8xl',
    // Add any other dynamic font sizes you may use
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [

  ],
}

