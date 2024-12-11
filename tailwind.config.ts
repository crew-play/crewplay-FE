import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

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
        "gray-006": "var(--gray-006)",
        "gray-007": "var(--gray-007)",
        "gray-008": "var(--gray-008)",
        "gray-009": "var(--gray-009)",
        "gray-010": "var(--gray-010)",

        "black-001": "var(--black-001)",
        "black-002": "var(--black-002)",
        "black-003": "var(--black-003)",
        "black-004": "var(--black-004)",

        "red-001": "var(--red-001)",
        "red-002": "var(--red-002)",

        "yellow-001": "var(--yellow-001)",
        "yellow-002": "var(--yellow-002)",

        "orange-001": "var(--orange-001)",
      },
      fontFamily: {
        pretendard: "var(--font-pretendard)",
        sfPro: "var(--font-sf-pro)",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(-200%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        "marquee-reverse": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-200%)",
          },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".custom-style": {
          borderImageSource:
            "linear-gradient(135.71deg, rgba(255, 255, 255, 0.2) 34.19%, rgba(255, 255, 255, 0.03) 56.92%)",
          boxShadow: `
          -5px -5px 20px 0px rgba(255, 255, 255, 0.3) inset,
          0px 4px 200px 0px rgba(74, 67, 135, 0.18) inset,
          -50px 50px 200px 0px rgba(74, 67, 135, 0.15),
          0px 10px 50px 0px rgba(255, 255, 255, 0.5) inset
        `,
          backdropFilter: "blur(20px)",
          background:
            "linear-gradient(223.54deg, rgba(248, 255, 190, 0.03) 1.21%, rgba(255, 255, 255, 0.1728) 49.51%, rgba(250, 255, 208, 0) 98.79%)",
        },
      });
    }),
  ],
} satisfies Config;
