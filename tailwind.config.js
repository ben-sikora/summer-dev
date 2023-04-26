/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx, css}",
  ],
  theme: {
    fontFamily: {
    title: ["Montserrat", "sans-serif"],
    },
    extend: { 
    colors:{
      'purple':'#4E0250',
      'orange': '#F78E69',
      'grey': '#F5F5F5',


    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    }
  },
  },
  plugins: [],
}

