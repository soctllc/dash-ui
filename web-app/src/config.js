import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#1975D2',
      dark:'#34314C',
      light: '#5891D5',
    }
  },
  typography: {
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