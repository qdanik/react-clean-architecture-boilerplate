import { useEffect, useRef, useState } from 'react'
import { ThemeApi, ThemeVariant } from './types'

export function useThemeApi(): ThemeApi {
  const [theme, setTheme] = useState<ThemeVariant>(ThemeVariant.Dark)
  const body = useRef(document.querySelector('body'))

  useEffect(() => {
    body.current.className = theme
  }, [theme])

  return {
    setTheme,
    theme,
  }
}
