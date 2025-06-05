/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'white-silver':'#f2f2f2',
        'blue-one':'#274073',
        'blue-two':'#4e8bbf',
        'yellow-one':'#f2a922',
        // agrega aquí los colores que necesites
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
    
  },
  plugins: [],
}

