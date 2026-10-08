import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        sub: "#3A3A3A",
        pop: "#FFD43B",
        sky: "#8FD3FF",
        mint: "#B7EB8F",
        pink: "#FFB3C7",
      },
      fontFamily: {
        sans: ["var(--font-zen-maru)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        hard: "5px 5px 0 #111111",
        "hard-sm": "4px 4px 0 #111111",
      },
    },
  },
  plugins: [],
} satisfies Config;
