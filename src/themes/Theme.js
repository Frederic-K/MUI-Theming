import {
  amber,
  deepOrange,
  grey,
  teal,
  red,
  blue,
  yellow,
} from '@mui/material/colors'


const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === 'dark' && {
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: deepOrange[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
          }
        : {
          }),
    },
  },
})

export default getDesignTokens
