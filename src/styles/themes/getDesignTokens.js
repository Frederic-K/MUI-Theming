import {
  amber,
  deepOrange,
  grey,
  teal,
  red,
  blue,
  yellow,
  lightGreen,
} from '@mui/material/colors'

// https://zenoo.github.io/mui-theme-creator/

export default function getDesignTokens(theme, mode) {
  switch (theme) {
    case 'defaultDM':
      return {
        palette: {
          mode,
        },
      }
    case 'techDM':
      return {
        palette: {
          // let mode to de able to call default dark mode if needed
          mode,
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#f50057',
          },
        },
      }
    case 'halloweenDM':
      return {
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
      }
    case 'stPatrickDM':
      return {
        palette: {
          mode,
          primary: {
            ...teal,
            ...(mode === 'dark' && {
              main: teal[300],
            }),
          },
          secondary: {
            main: '#f5f5f5',
          },
          ...(mode === 'dark' && {
            background: {
              default: lightGreen[900],
              paper: lightGreen[900],
            },
          }),
        },
      }
    case 'blueTH':
      return {
        palette: {
          // let mode to de able to call default dark mode if needed
          mode,
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#f50057',
          },
          text: {
            primary: 'rgba(20,26,214,0.87)',
          },
        },
      }
    default:
      return console.log('no available theme selected')
  }
}

// export default getDesignTokens
