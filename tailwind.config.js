/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the files Tailwind should scan for classes
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 1. Custom Colors
      colors: {
        // Main Background/Surfaces
        // The overall dark surface is slightly off-black, or just 'black'
        // The card backgrounds (e.g., Trending Today, Top Performers) are a slightly lighter black/dark gray.
        primaryDark: '#0A0A0A', // Near-black background
        cardDark: 'rgba(25, 25, 25, 0.8)', // Dark card background with slight transparency
        borderDark: '#1F1F1F', // Dark border color for separation

        // Brand/Accent Colors (derived from the image)
        greenAccent: '#00D1A1', // A bright, slightly blue-green for positive values and logo text (approximated)
        purpleAccent: '#9333ea', // For 'Deploy Strategy' button and some icons
        
        // Trading Colors
        bull: '#FBBF24', // Yellowish color for BULL (e.g., ScotiLion)
        bear: '#EF4444', // Reddish color for SHORT (e.g., SHITCOIN)
        
        // Strategy Box Colors (approximations)
        strategyYellow: '#FFCC00',
        strategyBlue: '#0066FF',
        strategyRed: '#FF0000',
      },

      // 2. Custom Fonts (The image uses a clean, modern sans-serif, often a custom web font like 'Inter' or 'Geist', 
      // but we will define a general, crisp sans-serif stack)
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },

      // 3. Spacing (If specific margins or padding deviated significantly, but standard spacing is usually enough)
      spacing: {
        '18': '4.5rem', // Example custom spacing
      },
      
      // 4. Custom Animation (e.g., for subtle hover effects)
      transitionProperty: {
        'border': 'border-color',
      }
    },
  },
  // Ensure we are using dark mode by default for the design context
  // darkMode: 'class', // Uncomment if you plan to implement a toggle
  plugins: [],
}