/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'violent-red': '#FF0033',
      },
      fontFamily: {
        'body': ['Switzer', 'sans-serif'],
        'heading': ['Khand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

