import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "2500px",
      },
    },
    extend: {
     
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        move: 'move 20s linear infinite ',
      },
      colors: {
        "text-primary": "darkslategrey",
        "text-secondary": "orange",
        'dark':'rgb(35, 35, 35)',
        "text-primary": "#232323",
        "text-secondary": "#366366",
        "text-tertiary": "#b8ced4",
        "surface-primary": "#0f313a",
        "surface-secondary": "#366366",
        "surface-border": "#ccc",
        "footer-border": "#316877",
      },
      screens: {
        mobile: "360px",
        "mobile-lg": "411px",
        tablet: "640px",
        "tablet-lg": "768px",
        laptop: "1024px",
        "laptop-lg": "1200px",
        desktop: "1366px",
        "4k": "1536px",
       
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        sora: ["var(--font-sora)"],
      },
    },
  },
  plugins: [ flowbite.content(),],
};
