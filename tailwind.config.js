/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#e91e8c',
          dark: '#ff4da6',
        },
        blue: {
          highlight: '#82bbff',
          link: '#1f5cff',
        },
        dark: {
          bg: '#1a1a1a',
          surface: '#2a2a2a',
          card: '#1f1f1f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

