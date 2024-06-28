/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(150px, 1fr))',
      },
      colors: {
        'blue': 'hsl(246, 80%, 60%)',

        'work': 'hsl(15, 100%, 70%)',
        'play': 'hsl(195, 74%, 62%)',
        'study': 'hsl(348, 100%, 68%)',
        'exercise': 'hsl(145, 58%, 55%)',
        'social': 'hsl(264, 64%, 52%)',
        'self-care': 'hsl(43, 84%, 65%)',
        
        'very-dark-blue': 'hsl(226, 43%, 10%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'desaturated-blue': 'hsl(235, 45%, 61%)',
        'pale-blue': 'hsl(236, 100%, 87%)',
      },
      fontFamily: {
        'rubik': ['rubik', 'sans-serif']
      }, 
      backgroundImage: {
        'ellipsis-bg': "url('@/assets/images/icon-ellipsis.svg')",
        'exercise-bg': "url('@/assets/images/icon-exercise.svg')",
        'play-bg': "url('@/assets/images/icon-play.svg')",
        'care-bg': "url('@/assets/images/icon-self-care.svg')",
        'social-bg': "url('@/assets/images/icon-social.svg')",
        'study-bg': "url('@/assets/images/icon-study.svg')",
        'work-bg': "url('@/assets/images/icon-work.svg')",
      }
    },
  },
  plugins: [],
}
