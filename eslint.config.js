import pluginJs from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  prettierRecommended,
  {
    rules: {
      // Base Warnings
      'no-console': 'warn',

      // Formatting
      'prettier/prettier': [
        'error',
        {
          semi: true,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          useTabs: false,
        },
      ],

      // TypeScript
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  {
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      ...hooksPlugin.configs.recommended.rules,
    },
    ignores: ['*.test.tsx'],
  },
];
