import * as React from 'react'
import { createTheme } from '@mui/material/styles'
import getDesignTokens from './Theme'

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // )
  const currentTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  )

  return {
    theme: currentTheme,
    colorMode,
  }
}
