module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    '@typescript-eslint/eslint-plugin',
    'eslint-plugin-tsdoc',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 0,
	"tsdoc/syntax": "warn"
  },
};
