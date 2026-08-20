/** Terms carrying no retrieval signal for questions about one person. */
const STOP_WORDS = new Set([
  'the',
  'a',
  'an',
  'is',
  'are',
  'was',
  'were',
  'has',
  'have',
  'had',
  'he',
  'his',
  'him',
  'ian',
  'and',
  'or',
  'of',
  'in',
  'on',
  'at',
  'to',
  'for',
  'with',
  'what',
  'which',
  'who',
  'does',
  'did',
  'do',
  'any',
  'about',
  'me',
  'tell',
  'you',
  'your',
  'that',
  'this',
  'it',
  'be',
  'can',
  'how',
  'much',
  'many',
  'ever',
  'work',
  'worked'
])

/**
 * Lowercases and splits on everything except word characters, `+`, `#` and `.`
 * so `c#`, `node.js` and `c++` survive as single terms.
 */
export function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .split(/[^a-z0-9+#.]+/)
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token))
}
