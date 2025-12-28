/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#148DA3", 
        "primary-dark": "#0F6B7C",
        "background-light": "#F9FAFB",
        "background-dark": "#111827",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1F2937",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        'city-pattern': "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}
