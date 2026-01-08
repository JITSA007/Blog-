/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0a192f',
        'earthy-green': '#64ffda',
        'light-slate': '#ccd6f6',
        'slate': '#8892b0',
        'dark-slate': '#495670',
      }
    },
  },
  plugins: [],
}
