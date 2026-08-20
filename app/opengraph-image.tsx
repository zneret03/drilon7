import { ImageResponse } from 'next/og'
import { corpus, profile } from '@/content'

/**
 * Static OG card. The previous site shipped no image at all, so shared links
 * previewed blank (action item P2-04). Generated rather than committed as a PNG
 * so it can never drift from the headline it quotes.
 */
export const alt = `${profile.name} — ${profile.role}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage(): Promise<ImageResponse> {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#0a192f',
        padding: 72,
        fontFamily: 'sans-serif'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 52,
            height: 52,
            border: '2px solid #64ffda',
            color: '#64ffda',
            fontSize: 22,
            fontWeight: 700
          }}
        >
          {profile.initials}
        </div>
        <div style={{ color: '#8690b0', fontSize: 24, letterSpacing: 2 }}>
          {profile.role.toUpperCase()}
        </div>
      </div>

      <div
        style={{
          color: '#e6f1ff',
          fontSize: 76,
          lineHeight: 1.05,
          letterSpacing: -2,
          maxWidth: 900
        }}
      >
        {profile.headline}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 24 }}>
        <span style={{ color: '#64ffda' }}>{corpus.length} chunks indexed</span>
        <span style={{ color: '#303c55' }}>·</span>
        <span style={{ color: '#8690b0' }}>every claim cited</span>
      </div>
    </div>,
    size
  )
}
