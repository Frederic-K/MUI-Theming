import * as React from 'react'
// import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'

import ColorModeContext from './themes/ColorModeContext'
import ToggleColorMode from './themes/ToggleColorMode'
import CssBaseline from '@mui/material/CssBaseline'
// import Switch from '@mui/material/Switch'
// import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ThemeToggleButton from './components/Buttons/ThemeToggleButton'
import ThemeSwitchButton from './components/Buttons/ThemeSwitchButton'

import './app.css'
import { teal } from '@mui/material/colors'

export default function App() {
  const { colorMode, theme, mode } = ToggleColorMode()
  // const [darkMode, setDarkMode]  = useState(false)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* div className={`app ${mode === 'dark' && 'dark-theme'}`} */}
        <Container maxWidth="md">
          <Box
            sx={
              {
                // width: '100vw',
                // height: '100vh',
              }
            }
            // className={`${mode === 'dark' && 'dark-theme'}`}
            className={`${mode === 'dark' ? 'dark-theme' : 'light-theme'}`}
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
          </Box>
        </Container>
        {/* </div> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
