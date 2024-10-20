module.exports = {
  plugins: ['import', 'unused-imports', 'perfectionist'],
  rules: {
    //import
    'import/export': 'error',
    'import/first': 'error',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import/no-cycle': ['error', { allowUnsafeDynamicCyclicDependency: true }],
    // unused-imports
    'unused-imports/no-unused-imports': 'error',
    // perfectionist
    'sort-imports': 'off',
    'import/order': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: [
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
        ],
      },
    ],
    'perfectionist/sort-exports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
      },
    ],
    'perfectionist/sort-named-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
      },
    ],
    'perfectionist/sort-named-exports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
      },
    ],
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js', '*.config.ts'],
};
