'use client'

import { useEffect } from 'react'

/**
 * Binds a single Cmd/Ctrl-modified key. One hook, because every keyboard
 * shortcut on the site is the same shape.
 */
export function useHotkey(key: string, onFire: () => void): void {
  useEffect(() => {
    const handle = (event: KeyboardEvent): void => {
      if (!(event.metaKey || event.ctrlKey)) return
      if (event.key.toLowerCase() !== key.toLowerCase()) return
      event.preventDefault()
      onFire()
    }

    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [key, onFire])
}
