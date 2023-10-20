import { useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'
import getDesignTokens from './Theme'
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
  // Deffault dark mode
  const defaultTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  )

  // Upgrade default dark mode
  const tealTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            ...teal,
            ...(mode === 'dark' && {
              main: teal[300],
            }),
          },
          secondary: {
            main: '#f5f5f5',
          },
          ...(mode === 'dark' && {
            background: {
              default: lightGreen[900],
              paper: lightGreen[900],
            },
          }),
        },
      }),
    [mode]
  )

  // Full custom dark mode
  const currentTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return {
    theme: tealTheme,
    colorMode,
    mode,
  }
}
