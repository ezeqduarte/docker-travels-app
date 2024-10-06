import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: '#333',
        primaryWhite: '#f3f3f3',
        blue: '#186FF2',
      },
      fontFamily: {
        suns: ['var(--font-suns)'],
      },
    },
  },
  plugins: [],
};
export default config;

