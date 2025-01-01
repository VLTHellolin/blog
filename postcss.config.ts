export default {
  plugins: {
    autoprefixer: {},
    'postcss-import': {},
    'postcss-nested': {},
    'postcss-combine-duplicated-selectors': {},
    'postcss-discard-empty': {},
    stylelint: {
      extends: ['stylelint-config-standard'],
    },
  },
};
