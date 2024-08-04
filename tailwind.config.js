/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '75' : '170vh',
        '71' : '180vh',
      },

      borderWidth: {
        '0.5' : '0.5px',
      },

    },
  },
  plugins: [],
}

