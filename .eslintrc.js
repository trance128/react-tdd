// eslint-disable-next-line no-undef
module.exports = {
  extends: [
    'codingitwrong',
  ],
  parser: 'babel-eslint',
  plugins: [
    'cypress',
    'jest',
    'react',
  ],
  env: {
    'browser': true,
    'jest/globals': true,
    'cypress/globals': true,
  },
  "rules": {
    "indent": "off",
  },
  "types": ["cypress"],
};
