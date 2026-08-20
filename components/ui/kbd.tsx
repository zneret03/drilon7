import type { ReactNode } from 'react'

export type KbdProps = {
  children: ReactNode
}

/** Key cap for the ⌘K hint — an undisplayed shortcut is a shortcut nobody uses. */
export function Kbd({ children }: KbdProps) {
  return (
    <kbd className='border-line-strong bg-surface-raised text-2xs text-muted inline-flex items-center border px-1.5 py-0.5 font-mono'>
      {children}
    </kbd>
  )
}
