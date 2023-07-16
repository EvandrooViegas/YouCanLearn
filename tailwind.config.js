/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "secondary-alpha": "var(--secondary-color-alpha)",
        blur: "var(--blur-color)",
        "border-primary": "var(--border-primary)",
        "border-primary-hover": "var(--border-primary-hover)",
      },
    
    },
  },
};
