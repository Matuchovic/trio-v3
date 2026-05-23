import type { Config } from "tailwindcss";
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'","Georgia","serif"],
        sans: ["'Syne'","system-ui","sans-serif"],
        mono: ["'DM Mono'","monospace"],
      },
      colors: {
        ink: "#070300",
        cream: "#FBF5EB",
        sand: "#F0E6D3",
        caramel: { DEFAULT:"#C4752A", light:"#E8943A" },
        gold: "#D4AF37",
        choco: "#3D1F0D",
        berry: "#D4406A",
        pista: "#4A9E6A",
      },
    },
  },
  plugins: [],
} satisfies Config;
