/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue:{
          DEFAULT: 'rgb(71, 153, 168)', // Base color
          hover: 'rgb(51, 133, 148)',  // Darker shade for hover
        },
      },
    },
  },
  plugins: [],
}

