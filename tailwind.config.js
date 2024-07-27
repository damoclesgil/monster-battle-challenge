/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'light-blue': '#E1F8FF',
        'light-green': '#00FF00',
        primary: '#10782E',
        disabled: '#799A82',
        'gray-dark': '#D9D9D9'
      }
    }
  },
  plugins: []
}
