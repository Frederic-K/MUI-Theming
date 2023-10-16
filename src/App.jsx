import * as React from 'react'
// import IconButton from '@mui/material/IconButton'
// import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles'
// import Brightness4Icon from '@mui/icons-material/Brightness4'
// import Brightness7Icon from '@mui/icons-material/Brightness7'

import ColorModeContext from './themes/ColorModeContext'
import SwitchButton from './components/SwitchButton'
import getDesignTokens from './themes/Theme'
import ToggleColorMode from './themes/ToggleColorMode'

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

// function SwitchButton() {
//   const theme = useTheme()
//   const colorMode = React.useContext(ColorModeContext)
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         width: '100%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         borderRadius: 1,
//         p: 3,
//       }}
//     >
//       {theme.palette.mode} mode
//       <IconButton
//         sx={{ ml: 1 }}
//         onClick={colorMode.toggleColorMode}
//         color="inherit"
//       >
//         {theme.palette.mode === 'dark' ? (
//           <Brightness7Icon />
//         ) : (
//           <Brightness4Icon />
//         )}
//       </IconButton>
//     </Box>
//   )
// }

// export default function ToggleColorMode() {
//   const [mode, setMode] = React.useState('light')
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
//       },
//     }),
//     []
//   )

//   // const theme = React.useMemo(
//   //   () =>
//   //     createTheme({
//   //       palette: {
//   //         mode,
//   //       },
//   //     }),
//   //   [mode]
//   // )
//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])
export default function App() {
  const { colorMode, theme } = ToggleColorMode()
  // console.log('too', colorMode, theme)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SwitchButton />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
