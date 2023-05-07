/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        btn: "0px 0px 30px 0px rgba(108,99,255,0.1) inset;",
      },
      backgroundImage: {
        "dark-950": "url('./backgrounds/bg-dark-950.svg')",
        "dark-900": "url('./backgrounds/bg-dark-900.svg')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        lora: ["Lora", "serif"],
        hind: ["Hind Madurai", "sans-serif"],
        londrina: ["Londrina Outline", "cursive"],
      },
      colors: {
        "light-navy": "#6C63FF",
        brand: {
          git: "#c9510c",
          linkedin: "#0a66c2",
          whatsapp: "#25d366",
          "java-script": "#f7df1e",
          "type-script": "#3178c6",
          react: "#00d8ff",
          redux: "#764ABC",
          "node-js": "#215732",
          express: "#353535",
          sequelize: "#46B0EF",
          postresql: "#30628A",
          mongodb: "#589636",
        },
      },
    },
  },
  plugins: [],
};
