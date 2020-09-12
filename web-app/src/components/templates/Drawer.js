import React from 'react';
import {SimpleAppBar} from '../molecules/AppBar'
import styled from "styled-components"
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

export const ResponsiveDrawer = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleMenu = () => {
   setOpen(!open);
 };

  return(
    <div>
      <SimpleAppBar
        handleMenu={()=>{handleMenu()}}
        title={props.title}/>
      <Hidden smUp>
        <StyledDrawer
          variant="temporary"
          open={open}
          onClose={handleMenu}>
          zszaaaa
        </StyledDrawer>
      </Hidden>
      <Hidden xsDown>
      <StyledDrawer
        variant="permanent">
        zszaaaaaaaaaaaaaaaa
      </StyledDrawer>
      </Hidden>
    </div>
  );
}

const StyledDrawer = styled(Drawer)`
  max-width: ${props => props.theme.drawerWidth};
`
