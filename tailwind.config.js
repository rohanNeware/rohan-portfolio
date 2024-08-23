module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-hover': '#2a1454',
      },
      boxShadow: {
        '2xl': '0 10px 20px rgba(0, 0, 0, 0.15)',
      },
      scale: {
        '105': '1.05',
      },
      animation: {
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-30px)',
          },
          '60%': {
            transform: 'translateY(-15px)',
          },
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
