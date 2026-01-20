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
        primary: '#171543',
        secondary: '#B6EC1D',
        'lime-green': '#99ce03',
        'dark-bg': '#262626',
        'card-bg': '#363636',
        'text-gray': '#b2b2b2',
        'border-gray': '#545454',
      },
    },
  },
  plugins: [],
}
