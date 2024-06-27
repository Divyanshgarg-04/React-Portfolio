/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-typewriter")({
      wordsets: {
        fruit: {
          words: ["Web designer", "Web Developer", "Competitive Programmer"],
          // words: ["Competitive Programmer"],
          delay: 3,
        },
      },
    }),
  ],
};
