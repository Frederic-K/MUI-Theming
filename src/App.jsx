import * as React from 'react'
// import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import ColorModeContext from './themes/ColorModeContext'
import ToggleColorMode from './themes/ToggleColorMode'
import CssBaseline from '@mui/material/CssBaseline'
// import Switch from '@mui/material/Switch'
// import Button from '@mui/material/Button'
import ThemeToggleButton from './components/Buttons/ThemeToggleButton'
import ThemeSwitchButton from './components/Buttons/ThemeSwitchButton'

import './app.css'

export default function App() {
  const { colorMode, theme, mode } = ToggleColorMode()
  // const [darkMode, setDarkMode]  = useState(false)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* div className={`app ${mode === 'dark' && 'dark-theme'}`} */}
        <Container>
          <div className="content">
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
          </div>
        </Container>
        {/* </div> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
