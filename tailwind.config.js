/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here if needed, based on requirements
        black: '#000000',
        'web-purple': '#7c3aed', // Example purple
        'web-blue': '#2563eb', // Example blue
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
