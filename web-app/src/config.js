import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#1975D2',
      dark:'#34314C'
    }
  },
  drawerWidth:'240px',
  tableHeight:'440px',
  gutter:{pc:'64px',sp:'56px'}
});
