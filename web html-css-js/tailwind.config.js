/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'grey': '#EAEAFA',
      },
    },
  },
  plugins: [
    // ...
    require('tailwindcss'),
    // require('autoprefixer'),
    // ...
  ],
};
