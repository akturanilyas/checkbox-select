/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          DEFAULT: '#334155',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          350: '#808080',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          1000: '#090e1a',
          1100: '#090d18',
          1200: '#04060b',
        },
      },
      fontFamily: {
        heading: ['Inter'],
        text: ['Inter'],
      },
    },
  },
  plugins: [],
};
