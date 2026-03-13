/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-navy": "#0A1329",
        "tech-purple": "#7A32FF",
        "electric-cyan": "#00E5FF",
        "silver-gray": "#C0C0C0",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7A32FF 0%, #00E5FF 100%)",
      },
    },
  },
  plugins: [],
};
