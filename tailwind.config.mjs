/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#C8A96E',
        cream: '#F5F0E8',
        card: '#141414',
        'card-border': '#222222',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '-apple-system', 'system-ui', 'sans-serif'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
