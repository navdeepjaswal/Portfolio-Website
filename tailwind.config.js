/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        '3xsm':'320px',
        '2xsm':'500px',
        'xsm': '768px',
        'sm': '900px',
        'md': '1025px',
        'lg': '1175px',
        'xl': '1360px',
        '2xl':'1615px',
      },
    },
  },
  plugins: [],
}

