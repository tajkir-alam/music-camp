/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-footer': "url('./src/assets/class/guiar.jpg')"
      },
    },
    fontFamily: {
      Courgette: ['Courgette']
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: 'class',
}

