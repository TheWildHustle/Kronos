/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#1a1a1a",
        crimson: "#800020",
        golden: "#FFD700",
        slate: "#2F4F4F",
      },
      animation: {
        'void-absorption': 'void-absorption 2s ease-in-out infinite',
        'time-spiral': 'time-spiral 3s ease-in-out infinite',
        'golden-reformation': 'golden-reformation 2.5s ease-in-out infinite',
      },
      keyframes: {
        'void-absorption': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0.95)', opacity: '0.8' },
        },
        'time-spiral': {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        'golden-reformation': {
          '0%': { filter: 'brightness(100%)' },
          '50%': { filter: 'brightness(150%)' },
          '100%': { filter: 'brightness(100%)' },
        },
      },
    },
  },
  plugins: [],
}

