/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["gilroy", "sans-serif"],
        display: ["gilroy", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#00A8FF",
          glow: "#0050C8",
          dark: "#000000",
          card: "#0A0F1E",
          border: "#1A2035",
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        float: "float 5s ease-in-out infinite",
        fadeup: "fadeup 0.7s ease both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // ← must be -50%
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        fadeup: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
