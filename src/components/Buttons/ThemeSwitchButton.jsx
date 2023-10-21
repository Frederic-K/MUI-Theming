import { useContext } from 'react'
import { useTheme } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'

import ColorModeContext from '../../themes/ColorModeContext'

export default function ThemeSwitchButton() {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
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
      <Switch onChange={colorMode.toggleColorMode} />
    </Box>
  )
}
