/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        brandeis : '#0E60F1',
        primary: '#1d4ed8'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        rainbow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in',
        rainbow: "rainbow 3s linear infinite",
      }
    }
  },
};
