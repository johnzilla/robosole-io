/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Cyber-industrial palette
        forge: {
          950: "#050608",
          900: "#0a0b0d",
          800: "#101216",
          700: "#171a20",
          600: "#20242c",
          500: "#2b303a",
        },
        cyan: {
          glow: "#22d3ee",
          bright: "#06b6d4",
          deep: "#0891b2",
        },
        silver: {
          DEFAULT: "#c0c4cc",
          dim: "#7c828e",
        },
        spark: {
          DEFAULT: "#f97316",
          hot: "#fb923c",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(34, 211, 238, 0.45)",
        "glow-sm": "0 0 20px -6px rgba(34, 211, 238, 0.5)",
        spark: "0 0 32px -8px rgba(249, 115, 22, 0.5)",
      },
      backgroundImage: {
        "grid-cyber":
          "linear-gradient(to right, rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "scan-line": "scan-line 6s linear infinite",
      },
    },
  },
  plugins: [],
};
