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
        "text-secondary": "orange",
        "text-tertiary": "#b8ced4",
        "surface-primary": "#0f313a",
        "surface-secondary": "#ff6900",
        "surface-border": "#ccc",
        "footer-border": "#316877",
      },
    },
  },
  plugins: [],
};
