/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], // Lägg till denna rad
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),      // Lägg till dessa
    require('@tailwindcss/typography')  // om du vill ha dem
  ],
}
