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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#181E4B",
        muted: "#5E6282",
        accent: "#DF6951",
        
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        volkhov: "var(--font-volkhov)",
        openSans: "var(--font-open-sans)",
      },
    },
  },
  plugins: [],
} satisfies Config;
