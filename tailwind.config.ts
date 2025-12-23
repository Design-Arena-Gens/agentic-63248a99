import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'objexis-blue': '#0A1628',
        'objexis-cyan': '#00F5FF',
        'objexis-purple': '#7B2CBF',
        'objexis-silver': '#C0C0C0',
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-orbitron)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
