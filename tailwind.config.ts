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
        primaryWhite: '#F7F9FC',
        secondaryWhite: '#FFFFFF',
        primaryText: '#2A2A2A',
        blue: '#186FF2',
        primaryDetails: '#A4C8F8',
      },
      fontFamily: {
        suns: ['var(--font-suns)'],
      },
    },
  },
  plugins: [],
};
export default config;