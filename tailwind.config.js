/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        candy: {
          bg: "#fef7ff",
          primary: "#e040a0",
          secondary: "#7c52aa",
          tertiary: "#0096cc",
          surface: "#ffffff",
          text: "#2e1a28",
          outline: "#907898",
          pink_fixed: "#ffd6ee",
          purple_fixed: "#eedcff",
          blue_fixed: "#c8eaff",
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        'pill': '9999px',
        'candy': '24px',
      },
      boxShadow: {
        'candy-pink': '0 4px 16px rgba(224, 64, 160, 0.15)',
        'candy-purple': '0 4px 16px rgba(124, 82, 170, 0.15)',
        'candy-blue': '0 4px 16px rgba(0, 150, 204, 0.15)',
      }
    },
  },
  plugins: [],
}
