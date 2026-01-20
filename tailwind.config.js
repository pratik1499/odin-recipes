/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Original colors (Mealplan app)
        primary: '#171543',
        secondary: '#B6EC1D',
        'lime-green': '#99ce03',
        'dark-bg': '#262626',
        'card-bg': '#363636',
        'text-gray': '#b2b2b2',
        'border-gray': '#545454',
        // Recipedia colors
        'recipedia-orange': '#F59E0B',
        'recipedia-orange-hover': '#D97706',
        'recipedia-dark': '#1F2937',
        'recipedia-gray': '#6B7280',
        'recipedia-light-gray': '#F9FAFB',
        'recipedia-star': '#FBBF24',
      },
    },
  },
  plugins: [],
}
