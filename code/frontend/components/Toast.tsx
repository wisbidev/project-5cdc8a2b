'use client'

import { useState, useEffect, useCallback } from 'react'

let showToastExternal: ((message: string) => void) | null = null

export function showToast(message: string) {
  showToastExternal?.(message)
}

export default function Toast() {
  const [visible, setVisible] = useState(false)
  const [text, setText] = useState('')
  const timerRef = { current: null as ReturnType<typeof setTimeout> | null }

  const hide = useCallback(() => {
    setVisible(false)
    timerRef.current = null
  }, [])

  useEffect(() => {
    showToastExternal = (message: string) => {
      setText(message)
      setVisible(true)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(hide, 3200)
    }
    return () => {
      showToastExternal = null
    }
  }, [hide])

  if (!visible) return null

  return (
    <div className="toast" role="status" aria-live="polite">
      {text}
    </div>
  )
}
