// tailwind.config.cjs
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#4f46e5',        // your primary color
        'accent-dark': '#4338ca',  // hover color
        info: '#ffffff',           // button text
      },
    },
  },
  plugins: [],
}
