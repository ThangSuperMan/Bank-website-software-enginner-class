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
        'black-normal': '#333333',
        'gray-border': '#E4EBF2',
        'gray-interest-rate': '#F1F3F2',
        'gray-dot-navigation': '#E4EBF2',
        'gray-seperate-line-light': '#D9D9D9',
        'gray-light': '#CACDD1',
        'blue-google': '#3D84FA',
        'footer-gray-light': '#F8F8F8'
      },
      screens: {
        'tablet': '900px',
        'mobile': '486px',
      }
    },
  },
  plugins: [],
}
