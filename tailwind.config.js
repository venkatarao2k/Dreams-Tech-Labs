/** @type {import('tailwindcss').Config} */
// Only Tailwind's base reset is used; styles live in src/index.css.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: [],
};
