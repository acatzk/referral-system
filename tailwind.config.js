module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Helvetica', 'serif'],
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-line-clamp')
  ],
}
