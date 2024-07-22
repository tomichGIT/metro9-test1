/** @type {import('postcss-load-config').Config} */
const config = {
  // plugins: {
  //   tailwindcss: {},
  // },
  // Metronic 9
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-preset-env': {
      features: {
        'nesting-rules': false,
        "is-pseudo-class": false,
      },
    },
    'tailwindcss': {},
    'autoprefixer': {},
  },
};

export default config;


// export de Metronic 9
// export const plugins = {
//   'postcss-preset-env': {},
//   'postcss-import': {},
//   'tailwindcss/nesting': 'postcss-nesting',
//   'postcss-preset-env': {
//     'features': {
//       'nesting-rules': false
//     }
//   },
//   'tailwindcss': {},
//   'autoprefixer': {},
// };
