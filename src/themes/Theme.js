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
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },

  //////////////////////////////////
  // palette: {
  //   mode,
  // },
})

export default getDesignTokens
