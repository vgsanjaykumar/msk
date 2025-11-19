/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // <-- enable class-based dark mode (use document.documentElement.classList.add('dark'))
  theme: {
    extend: {
      colors: {
        // optional custom colors for light/dark themes
        accent: {
          DEFAULT: "#06b6d4", // cyan-500 like
          dark: "#0891b2",
        },
        surface: {
          light: "#f3f4f6",
          dark: "#0f172a",
        },
      },
      // optional: better control for large headings like your hero
      fontSize: {
        "hero-lg": ["5.5rem", { lineHeight: "0.9" }], // use as text-hero-lg
      },
    },
  },
  plugins: [],
}
