import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  typescript: true,
  unocss: true,
  formatters: true,
}, {
  rules: {
    'no-console': 'off',
    'unused-imports/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 0,

    'ts/consistent-type-imports': 'off',
    'node/prefer-global/process': 'off',
    'node/prefer-global/buffer': 'off',

    'import/order': [
      2,
      {
        'pathGroups': [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        'alphabetize': { order: 'asc', caseInsensitive: false },
        'newlines-between': 'always-and-inside-groups',
        'warnOnUnassignedImports': true,
      },
    ],
  },
})
