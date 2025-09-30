module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  plugins: ['@typescript-eslint', 'react-refresh', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message: 'Use named imports from React instead.'
          }
        ]
      }
    ],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
