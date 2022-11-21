/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#008C44',
        'secondary-color': '#E49F15',
        'gray-dark': '#666666',
        'gray-dot-navigation': '#E4EBF2',
        'gray-seperate-line-light': '#D9D9D9',
        'gray-light': '#CACDD1',
      },

    },
  },
  plugins: [],
}
