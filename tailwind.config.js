/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, ts}"],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
