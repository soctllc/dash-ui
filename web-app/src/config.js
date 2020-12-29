import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#1975D2',
      dark:'#34314C',
      light: '#5891D5',
    },
    black: {
      textColor: '#2B2B2B',
    },
    gray: {
      gray01: `#F0F0F0`,
      gray02: '#DADADA',
      gray03: '#BABAB9',
      gray04: '#7C7C7C'
    }
  },
  typography: {
    textColor: '#2B2B2B',
    fontSize: 14,
    fontFamily: [
      'Noto Sans JP',
      'sans-serif',
    ].join(','),
  },
  drawerWidth:'240px',
  tableHeight:'440px',
  gutter:{pc:'64px',sp:'56px'}
});

export {theme};