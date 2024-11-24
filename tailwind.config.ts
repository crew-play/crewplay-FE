import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "default-default": "var(--text-default-default)",
        "default-secondary": "var(--text-default-secondary)",
        "brand-default": "var(--text-brand-default)",
        "brand-onBrand": "var(--text-brand-onBrand)",
      },
      borderColor: {
        "default-default": "var(--border-default-default)",
      },
      backgroundColor: {
        "default-default": "var(--background-default-default)",
        "default-secondary": "var(--background-default-secondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
