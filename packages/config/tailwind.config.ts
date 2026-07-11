import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        black: {
          950: "#0A0A0B",
          900: "#101012",
        },
        gray: {
          800: "#1C1C1F",
          700: "#2A2A2E",
          600: "#3F3F46",
          500: "#6B6B72",
          400: "#9A9AA2",
          300: "#C7C7CE",
          100: "#EDEDEF",
        },
        purple: {
          700: "#5B21B6",
          600: "#6D28D9",
          500: "#7C3AED",
          400: "#9F67F5",
          300: "#C4A6FA",
        },
        white: "#FAFAFA",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
        full: "999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.4)",
        md: "0 8px 24px rgba(0,0,0,0.35)",
        lg: "0 24px 64px rgba(0,0,0,0.45)",
        glow: "0 0 40px rgba(124,58,237,0.35)",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "blur-reveal": "blurReveal 0.9s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blurReveal: {
          "0%": { opacity: "0", filter: "blur(8px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;