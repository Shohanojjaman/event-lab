/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: {
        sm: '0, 1.25rem',
      },
    },
    extend: {
      colors: {
        theme: '#ce1446',
        body: '#515154',
        heading: '#2d373c',
        'secondary-bg': '#fafafa',
      },
    },
  },
  plugins: [require('tailwindcss-text-fill'), require('daisyui'), require('flowbite/plugin')],
};
