/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Ganti 'purge' dengan 'content'
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
