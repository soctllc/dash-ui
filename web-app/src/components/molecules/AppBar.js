import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components"

export const SimpleAppBar = (props) => {
  return(
    <StyledAppBar position="static" color="inherit">
     <Toolbar>
      <StyledIconButton
        onClick={()=>props.handleMenu()}
        edge="start" color="inherit" aria-label="menu">
        <MenuIcon/>
      </StyledIconButton>
        {props.children}
     </Toolbar>
    </StyledAppBar>
  )
}



const StyledAppBar = styled(AppBar)`
  @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    max-width:calc(100% - ${props => props.theme.drawerWidth});
    margin-left: ${props => props.theme.drawerWidth};
  }
`;

const StyledIconButton = styled(IconButton)`
  @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    display: none;
  }
`
