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
        "white-001": "var(--white-001)",
        "white-002": "var(--white-002)",
        "white-003": "var(--white-003)",
        "white-004": "var(--white-004)",
        "white-005": "var(--white-005)",
        "white-006": "var(--white-006)",

        "gray-001": "var(--gray-001)",
        "gray-002": "var(--gray-002)",
        "gray-003": "var(--gray-003)",
        "gray-004": "var(--gray-004)",
        "gray-005": "var(--gray-005)",

        "black-001": "var(--black-001)",
        "black-002": "var(--black-002)",
        "black-003": "var(--black-003)",

        "red-001": "var(--red-001)",

        "yellow-001": "var(--yellow-001)",

        "orange-001": "var(--orange-001)",
      },
      fontFamily: {
        pretendard: "var(--font-pretendard)",
        sfPro: "var(--font-sf-pro)",
      },
    },
  },
  plugins: [],
} satisfies Config;
