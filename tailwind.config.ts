import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: '#F97316',
        dark: {
          bg: '#0F172A',
          'bg-secondary': '#1E293B',
          'bg-tertiary': '#334155',
          text: '#F1F5F9',
          'text-secondary': '#CBD5E1',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
