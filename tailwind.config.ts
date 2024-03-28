import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "marquee": "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        "wide": { "raw": "screen and (device-aspect-ratio: 16/9)" },
        "landscape": { "raw": "(orientation: landscape)" },
      },
      colors: {
        "gu-red": "#ff0000",
        "gu-yellow": "#ffd349",
        "gu-brand": {
          DEFAULT: "#ffc200",
          begin: "#ffc200",
          end: "#ffa600",
          header: "#ffedb4",
          dark: "#ffcc00",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
