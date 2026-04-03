import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          black: "#09090B",
          dark: "#111113",
          card: "#18181B",
          border: "#27272A",
        },
        accent: {
          cyan: "#06B6D4",
          light: "#22D3EE",
          dim: "#0891B2",
        },
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
