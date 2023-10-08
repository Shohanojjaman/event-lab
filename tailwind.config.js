/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: '#ce1446',
        body: '#515154',
        heading: '#2d373c',
        'secondary-bg': '#fafafa',
      },
    },
  },
  plugins: [],
};
