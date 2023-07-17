/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    module.exports = function({ addUtilities }) {
      const writingModeUtilities = {
        '.writing-mode-vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.writing-mode-horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        // Add more utility classes as needed
      };
    
      addUtilities(writingModeUtilities);
    }
    
  ],
}

