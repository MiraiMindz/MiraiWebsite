/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        firaCode: ['var(--font-FiraCode)'],
        dmMono: ['var(--font-DmMono)'],
        ibmPlexMono: ['var(--font-IbmPlexMono)'],
      },
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    gridTemplateColumns: {
      'article': '1fr auto 1fr',
    }
  },
  darkMode: 'class',
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
  ],
}
