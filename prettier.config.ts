import type { Config } from 'prettier'

/**
 * Formatting is settled here so it never costs review time. Kept in TypeScript
 * with the `Config` type so a typo in an option name fails typecheck.
 */
const config: Config = {
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  printWidth: 90,
  trailingComma: 'none',
  plugins: ['prettier-plugin-tailwindcss']
}

export default config
