import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import type { Linter } from 'eslint'

/**
 * Flat config, in TypeScript so the rule objects are type-checked rather than
 * trusted. ESLint loads this through jiti. The custom block encodes the
 * conventions from CLAUDE.md that a reviewer would otherwise catch by eye.
 */
const config: Linter.Config[] = [
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**', 'coverage/**', 'next-env.d.ts']
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'JSXOpeningElement[name.name="svg"]',
          message:
            'No hand-rolled SVG. Import the icon from lucide-react (see CLAUDE.md § Icons).'
        },
        {
          selector: 'JSXOpeningElement[name.name="path"]',
          message: 'No hand-rolled SVG paths. Import the icon from lucide-react.'
        },
        {
          selector: 'JSXAttribute[name.name="dangerouslySetInnerHTML"]',
          message:
            'Banned. This was a live XSS path in the previous site (.claude/defects.md D-01).'
        },
        {
          selector: 'JSXOpeningElement[name.name="img"]',
          message: 'Use next/image so images are sized, lazy and format-negotiated.'
        }
      ],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'styled-components',
              message: 'Removed in v2. Style with Tailwind tokens from app/globals.css.'
            },
            {
              name: 'react-feather',
              message: 'Removed in v2. Icons come from lucide-react.'
            },
            {
              name: 'react-slick',
              message: 'Removed in v2. Carousels hid half the content from crawlers.'
            }
          ],
          patterns: [
            {
              group: ['../../*'],
              message: 'Reach across folders with the @/ alias, not ../../.'
            }
          ]
        }
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }]
    }
  }
]

export default config
