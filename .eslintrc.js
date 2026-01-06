// module.exports = {
//   root: true,
//   extends: '@react-native',
// };

module.exports = {
  root: true,
  extends: '@react-native',

  plugins: ['react', 'react-hooks', 'react-native'],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },

  env: {
    browser: true,
    node: true,
    es6: true,
    'react-native/react-native': true,
  },

  settings: {
    react: { version: 'detect' },
  },

  rules: {
    /* ---------------- Possible Errors ---------------- */
    'no-console': 'off',
    'no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    'no-undef': 'off',

    /* ---------------- Best Practices ---------------- */
    eqeqeq: ['error', 'always'], // if not strict about null comparisons, use 'smart'
    curly: ['error', 'all'],
    'no-eval': 'error',

    /* ---------------- Stylistic Issues ---------------- */
    semi: ['error', 'always'],
    quotes: 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],

    /* ---------------- React / React Native ---------------- */
    'react/prop-types': 'off',
    'react-native/no-inline-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-unused-styles': 'error',

    /* ---------------- Hooks ---------------- */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',

    /* ---------------- ECMAScript 6 ---------------- */
    'arrow-spacing': ['error', { before: true, after: true }],
    'prefer-const': 'error',
  },
};
