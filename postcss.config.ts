/** Tailwind v4 runs entirely through its PostCSS plugin; there is nothing else. */
const config: { plugins: Record<string, Record<string, never>> } = {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}

export default config
