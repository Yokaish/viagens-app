/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#00466A',
        customInputBlue: '#E6EDF1',
        customRed: '#FF375B',
      }
    },
  },
  plugins: [],
}

