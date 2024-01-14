/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'gray-200': 'hsl(0, 0%, 98%)',
      'gray-300': 'hsl(0, 0%, 41%)',
      'black-500': 'hsl(0, 0%, 8%)', 
    },
  plugins: [],
}
}

