const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './apps/**/*.{html,ts}',
        './libs/**/*.{html,ts}',
      ],
      options: {
        safelist: ['axis', 'axis--x', 'axis--y', 'line' ]
      }
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography')
    ],
};
