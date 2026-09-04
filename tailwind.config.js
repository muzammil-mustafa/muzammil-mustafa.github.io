/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cohesion: {
          mint: "#66ffd9",
          green: "#00cc99",
          indigo: "#6670ff",
          orange: "#f94706",
          dark: "#000000",
          cardDark: "#1a1a1a",
          mutedDark: "#4d4d4d",
          grayText: "#808080",
          lightGray: "#b3b3b3",
          border: "#e5e5e5",
          borderLight: "#f2f2f2",
          bg: "#fafafa",
          white: "#ffffff",
        }
      },
      fontFamily: {
        sans: ['"Public Sans"', 'sans-serif'],
        serif: ['"PT Serif"', 'serif'],
        onest: ['"Onest"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 10px 30px rgba(0, 0, 0, 0.05)',
        'card-hover': '0px 20px 40px rgba(0, 0, 0, 0.08)',
        'pill': '0px 4px 20px rgba(0, 0, 0, 0.06)',
        'glow-mint': '0px 0px 30px rgba(102, 255, 217, 0.3)',
        'glow-indigo': '0px 0px 30px rgba(102, 112, 255, 0.3)',
        'glow-orange': '0px 0px 30px rgba(249, 71, 6, 0.3)',
      }
    },
  },
  plugins: [],
}
