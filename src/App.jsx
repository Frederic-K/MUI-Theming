import * as React from 'react'
// import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'

import ColorModeContext from './styles/themes/ColorModeContext'
import ToggleColorMode from './styles/themes/ToggleColorMode'
import CssBaseline from '@mui/material/CssBaseline'
// import Switch from '@mui/material/Switch'
// import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ThemeToggleButton from './components/Buttons/ThemeToggleButton'
import ThemeSwitchButton from './components/Buttons/ThemeSwitchButton'
import ThemeCustomSwitchBtn from './components/Buttons/ThemeCustomSwitchBtn'

export default function App() {
  const { colorMode, themeName, theme, mode } = ToggleColorMode()
  // const [darkMode, setDarkMode]  = useState(false)
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          component="div"
          // Full screen :
          // maxWidth="false" equal to maxWidth="100vw"
          maxWidth="xl"
          // Can be set by css
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          // className={`${mode === 'dark' && 'dark-theme'}`}
          className={`${
            mode === 'dark' ? `dark-${themeName}-BG` : `light-${themeName}-BG`
          }`}
        >
          <Box
            component="div"
            sx={{
              width: '60%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <h1>Hello world!</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates id ratione voluptatibus iusto unde soluta dicta cum
              nam, rerum sit labore at et ducimus nobis expedita molestiae
              commodi nostrum eius voluptatem reiciendis repellat accusamus
              placeat eveniet rem. Consequuntur, ducimus dolorum. Sunt deserunt
              optio itaque maxime eligendi temporibus magnam pariatur inventore.
            </p>
            <ThemeToggleButton />
            <ThemeSwitchButton />
            <ThemeCustomSwitchBtn />
          </Box>
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
