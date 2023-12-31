/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#171823',
        dark: '#494C6B',
        light: '#FAFAFA',
        white: '#FFFFFF',
        blue: '#3A7CFD',
        'gray-500': '#9495A5',
        'gray-300': '#D1D2DA',
        'gray-200': '#E3E4F1',
        'gray-100': '#FAFAFA',
        'slate-800': '#25273D',
        'slate-700': '#393A4B',
        'slate-600': '#4D5067',
        'slate-500': '#767992',
        'slate-200': '#C8CBE7',
      },
    },
  },
  plugins: [],
};
