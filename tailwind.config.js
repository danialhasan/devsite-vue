const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  darkMode: "class",
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', ...defaultTheme.fontFamily.sans],
        serif: ['"Arima Madurai"', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        'soft-white': '#FAFAFA',
        'soft-black-foreground': '#2D3748',
        'soft-black-background': '#1A202C',
        'neon-green': '#39FF14',
        'accent-1': '#4C51BF',
        'accent-2': '#ED64A6',
        'accent-3': '#7E63FF',
        'accent-4': '#F56565',
        'form-outline': '#41B4E6'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}