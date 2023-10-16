import { useState, useMemo } from 'react'
import { createTheme } from '@mui/material/styles'
import getDesignTokens from './Theme'

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

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // )

  const currentTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return {
    theme: currentTheme,
    colorMode,
  }
}
