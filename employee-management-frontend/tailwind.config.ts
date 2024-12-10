import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb", // Cor do fundo
        foreground: "#111827", // Cor do texto
        primary: "#7541fa", // Cor primária
      },
    },
  },
  plugins: [],
} satisfies Config;
