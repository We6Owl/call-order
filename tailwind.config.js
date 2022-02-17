module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
  container: {
      padding: '.5rem',
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
     require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
