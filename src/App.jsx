import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import ColorModeContext from './themes/ColorModeContext'
import SwitchButton from './components/SwitchButton'
import ToggleColorMode from './themes/ToggleColorMode'

export default function App() {
  const { colorMode, theme } = ToggleColorMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SwitchButton />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
