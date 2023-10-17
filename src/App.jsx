import * as React from 'react'
import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import ColorModeContext from './themes/ColorModeContext'
import SwitchButton from './components/SwitchButton'
import ToggleColorMode from './themes/ToggleColorMode'

import './app.css'

export default function App() {
  const { colorMode, theme, mode } = ToggleColorMode()
  // const [darkMode, setDarkMode]  = useState(false)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className={`app ${mode === 'dark' && 'dark-theme'}`}>
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
            <SwitchButton />
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
