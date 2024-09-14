/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-primary": "#232323",
        "text-secondary": "#366366",
        "text-tertiary": "#b8ced4",
        "surface-primary": "#0f313a",
        "surface-secondary": "#366366",
        "surface-border": "#ccc",
        "footer-border": "#316877",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        sora: ["var(--font-sora)"],
      },
    },
  },
  plugins: [],
};
