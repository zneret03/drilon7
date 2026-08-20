/**
 * Starter questions for the ask console.
 *
 * Lives in lib/ rather than content/ because client components render these:
 * every module in content/ imports zod and the corpus, so importing from there
 * would drag the whole validated dataset into the browser bundle for five
 * strings. Keep this file import-free.
 */
export const SUGGESTED_QUESTIONS = [
  'Has he shipped GraphQL in production?',
  'What has he done with CI/CD and testing?',
  'Show me his machine learning work',
  'How deep is his Next.js experience?',
  'What is his biggest measured impact?'
] as const
