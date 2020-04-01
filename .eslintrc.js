module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
    'airbnb',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'react-hooks',
    'import',
  ],
  rules: {
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-assertions': ['warn', { assertionStyle: 'as' }],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'warn',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/alt-text': 'off',
    'eqeqeq': 'warn',
    'linebreak-style': 'off',
    'spaced-comment': 'off',
    'class-methods-use-this': 'off',
    // conflicting rules
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
  },
  globals: {
    React: 'writable',
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'typescript': {
        alwaysTryTypes: true
      },
    },
  },
};
