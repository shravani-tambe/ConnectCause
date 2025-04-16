/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          100: "#f3f8f8" /* Lightest mint */,
          200: "#e6f1f0" /* Light mint */,
          300: "#c5dbd9" /* Mint */,
          400: "#7aaca6" /* Teal */,
          500: "#5e9992" /* Main teal */,
          600: "#4d7d77" /* Dark teal */,
          700: "#3c615d" /* Darker teal */,
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          100: "#fdf0e9" /* Lightest peach */,
          200: "#fbe1d0" /* Light peach */,
          300: "#f8c7a7" /* Peach */,
          400: "#f5ad7e" /* Medium peach */,
          500: "#f29366" /* Main peach */,
          600: "#e67e4e" /* Dark peach */,
          700: "#d15f2b" /* Darker peach/terracotta */,
        },
        terracotta: {
          DEFAULT: "#d67d56" /* Main terracotta */,
          light: "#e29980" /* Light terracotta */,
          dark: "#b5623f" /* Dark terracotta */,
        },
        mint: {
          DEFAULT: "#e1f0eb" /* Main mint */,
          light: "#f0f8f5" /* Light mint */,
          dark: "#c5dbd3" /* Dark mint */,
        },
        cream: {
          DEFAULT: "#f8f5f0" /* Main cream */,
          light: "#fdfbf7" /* Light cream */,
          dark: "#f0ebe0" /* Dark cream */,
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
