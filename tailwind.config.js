/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '620px',
      md: '800px',
      lg: '992px',
      xl: '1170px'
    },
    colors: {
      blue1: 'hsl(205, 86%, 17%)',
      blue2: 'hsl(205, 77%, 27%)',
      blue3: 'hsl(205, 72%, 37%)',
      blue4: 'hsl(205, 63%, 48%)',
      blue5: 'hsl(205, 78%, 60%)',
      blue6: 'hsl(205, 89%, 70%)',
      blue7: 'hsl(205, 90%, 76%)',
      blue8: 'hsl(205, 86%, 81%)',
      blue9: 'hsl(205, 90%, 88%)',
      blue10: 'hsl(205, 100%, 96%)',
      grey1: 'hsl(209, 61%, 16%)',
      grey2: 'hsl(211, 39%, 23%)',
      grey3: 'hsl(209, 34%, 30%)',
      grey4: 'hsl(209, 28%, 39%)',
      grey5: 'hsl(210, 22%, 49%)',
      grey6: 'hsl(209, 23%, 60%)',
      grey7: 'hsl(211, 27%, 70%)',
      grey8: 'hsl(210, 31%, 80%)',
      grey9: 'hsl(212, 33%, 89%)',
      grey10: 'hsl(210, 36%, 96%)',
      white: '#fff',
      reddark: 'hsl(360, 67%, 44%)',
      redlight: 'hsl(360, 71%, 66%)',
      greendark: 'hsl(125, 67%, 44%)',
      greenlight: 'hsl(125, 71%, 66%)',
      black: '#222'
    },
    fontFamily: {
      'Segoe UI': ['Segoe UI'],
      Roboto: ['Roboto']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  }
}
