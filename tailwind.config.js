module.exports = {
  theme: {
    extend: {
      keyframes: {
        loopScroll: {
          '0%': { transform: 'translateX(-100%)' }, // Start off-screen to the left
          '100%': { transform: 'translateX(100%)' } // End off-screen to the right
        }
      },
      animation: {
        'loop-scroll': 'loopScroll 15s linear infinite' // Change duration to your liking
      }
    }
  },
  plugins: [],
}
