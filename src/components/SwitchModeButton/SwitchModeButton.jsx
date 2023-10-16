import { IconButton } from '@mui/material'
import { Brightness4 as LightIcon } from '@mui/icons-material'

export const SwitchModeButton = () => {
  return (
    <IconButton sx={{ ml: 1 }} color="inherit">
      <LightIcon />
    </IconButton>
  )
}
