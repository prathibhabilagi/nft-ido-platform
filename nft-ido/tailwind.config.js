/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "zee-primary": "linear-gradient(95.73deg, #087EE1 0%, #04C29C 100%);",
        "zee-primary-hover":
          "linear-gradient(269deg, #04C29C 0%, #087EE1 127.85%)",
      })
    },
  },
  plugins: [],
}
