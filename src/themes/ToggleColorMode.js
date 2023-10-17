import { useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'
import getDesignTokens from './Theme'
import { teal } from '@mui/material/colors'

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
  // const currentTheme = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // )

  // Upgrade default dark mode
  const currentTheme = useMemo(
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
        },
      }),
    [mode]
  )

  // Full custom dark mode
  // const currentTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return {
    theme: currentTheme,
    colorMode,
    mode,
  }
}
