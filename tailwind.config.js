/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf9f6',
          100: '#f5efde',
          200: '#ede3ca',
          300: '#e8c57c',
          400: '#d9a441',
          500: '#d9a441',
          600: '#b38732',
          700: '#8a6825',
          800: '#624a1a',
          900: '#3a2c10',
        },
        charcoal: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#3a3a3d',
          600: '#2a2a2d',
          700: '#1a1a1c',
          800: '#0a0a0c',
          900: '#000000',
        },
        accent: {
          50: '#fef7f3',
          100: '#fde9dc',
          200: '#fbd3bb',
          300: '#f7a675',
          400: '#f37a3f',
          500: '#c65a1e',
          600: '#9e4818',
          700: '#763612',
          800: '#4e240c',
          900: '#261206',
        },
        sand: {
          DEFAULT: '#EDE3CA',
          light: '#F5EFDE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
