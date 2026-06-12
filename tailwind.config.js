/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink:    '#0f0f0f',
        paper:  '#f0ede6',
        dim:    '#6b6860',
        acting: '#e8514a',
        voice:  '#4ab8e8',
        dev:    '#a855f7',
        'acting-dark': '#2a0a09',
        'voice-dark':  '#091a24',
        'dev-dark':    '#150a24',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease forwards',
        'fade-up-1': 'fadeUp 0.7s ease 0.1s forwards',
        'fade-up-2': 'fadeUp 0.7s ease 0.2s forwards',
        'fade-up-3': 'fadeUp 0.7s ease 0.35s forwards',
        'fade-up-4': 'fadeUp 0.7s ease 0.5s forwards',
        'fade-in':   'fadeIn 1s ease 0.2s forwards',
        'shimmer':   'shimmer 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
