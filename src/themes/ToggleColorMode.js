import { useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'
import getDesignTokens from './getDesignTokens'
import {
  teal,
  amber,
  grey,
  deepOrange,
  red,
  lightGreen,
} from '@mui/material/colors'

export default function ToggleColorMode() {
  const [mode, setMode] = useState('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  // Default dark mode
  // const defaultTheme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // )

  // Theme selector
  const currentTheme = useMemo(
    () => createTheme(getDesignTokens('blueTH', mode)),
    [mode]
  )

  return {
    theme: currentTheme,
    colorMode,
    mode,
  }
}
