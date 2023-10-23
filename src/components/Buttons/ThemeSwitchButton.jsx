// React
import { useContext } from 'react'
// React context
import ColorModeContext from '../../styles/themes/ColorModeContext'
// MUI
import { useTheme } from '@mui/material/styles'
import FormControlLabel from '@mui/material/FormControlLabel'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'

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
        // bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
      }}
    >
      <FormControlLabel
        control={<Switch sx={{ m: 1 }} />}
        labelPlacement="start"
        label={`${theme.palette.mode} mode`}
        onChange={colorMode.toggleColorMode}
      />
    </Box>
  )
}
