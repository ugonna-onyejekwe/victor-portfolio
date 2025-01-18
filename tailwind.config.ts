import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#109ee6",
        dark: "#0e0f0f",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      fontFamily: {
        poppins: "var(--font-poppins)",
        dmSans: "var(--font-dm_sans)",
        pacifico: "var(--font-pacifico)",
      },
      backgroundImage: {
        profile: "url(/victor.jpg)",
        home_bg: "url(/home-bg.webp)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
