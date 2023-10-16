// import { IconButton } from '@mui/material'
// import { Brightness4 as LightIcon } from '@mui/icons-material'

// export const SwitchModeButton = () => {
//   return (
//     <IconButton sx={{ ml: 1 }} color="inherit">
//       <LightIcon />
//     </IconButton>
//   )
// }
import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
// import getDesignTokens from './themes/theme'
import { ColorModeContext } from '../..colorModeContext/themes/colorModeContext'

export default function SwitchModeButton() {
  const theme = useTheme()
  // const ColorModeContext = React.createContext({ toggleColorMode: () => {} })
  const colorMode = React.useContext(ColorModeContext)
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  )
}
