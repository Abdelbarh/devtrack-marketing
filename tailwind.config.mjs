/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#a3e635',
          dark: '#8bcf2a',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)',
        'card-lg': '0 4px 24px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.4)',
        'mockup': '0 32px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
