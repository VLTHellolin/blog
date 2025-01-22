import antfu from '@antfu/eslint-config';

export default antfu({
  react: true,
  unocss: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
  rules: {
    'style/brace-style': ['error', '1tbs'],
    'style/jsx-quotes': ['error', 'prefer-single'],
    'react/prefer-destructuring-assignment': 'off',
  },
});
