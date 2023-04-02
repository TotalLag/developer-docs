module.exports = {
  content: ['./src/**/*.{njk,md}', './.eleventy.js'],
  daisyui: {
    themes: [
      {
        tgwf: {
          ...require('daisyui/src/colors/themes')['[data-theme=lofi]'],
          primary: '#f7f7f7',
          secondary: '#212121',
          accent: '#dc2a0b',
          neutral: '#707070',
          'base-100': '#ffffff',
          info: '#0284c7',
          success: '#22c55e',
          warning: '#fde047',
          error: '#f87171',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
