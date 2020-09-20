import React from 'react';
import styled,{ keyframes } from "styled-components"
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const fadeIn = keyframes`
    0% {
      opacity:0.1;
    }
    100% {
      opacity:1;
    }
`;

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
const AppName = styled.div`
  display: flex;
  align-items: center;
  width:100%;
  height:${props => props.theme.gutter.sp};
  @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    height:${props => props.theme.gutter.pc};
  }
`

const DrawerArea = styled.div`
  width:${props => props.theme.drawerWidth};
  background:${props => props.theme.palette.primary.dark};
  height:100%;
`;

const StyledDrawer = styled(Drawer)`
  background-color:red;
`;

const Overlay = styled.div`
  animation: ${fadeIn} 0.2s ease-in-out;
  backdrop-filter: blur(6px);
  position:fixed;
  top:0;
  width:100vw;
  height:100vh;
  z-index:${props => props.theme.zIndex.drawer};
`
const Content = styled.div`
  margin-top:calc(${props => props.theme.gutter.sp} + ${props => props.theme.spacing(2)}px);
  @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    max-width:calc(100% - ${props => props.theme.drawerWidth});
    margin-left: ${props => props.theme.drawerWidth};
    margin-top:calc(${props => props.theme.gutter.pc} + ${props => props.theme.spacing(2)}px);
  }
`

const SimpleAppBar = (props) => {
  return(
    <StyledAppBar color="inherit">
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

export const AppFrame = (props) => {
  const { container } = props;
  const [open, setOpen] = React.useState(false);
  const handleMenu = () => {
   setOpen(!open);
 };

  return(
    <>
      <SimpleAppBar
        handleMenu={handleMenu}
        title={props.title}/>
      <Hidden smUp>
        {open?
          <Overlay onClick={handleMenu}>
          <StyledDrawer
            variant="permanent" open>
            <DrawerArea><AppName>{props.appLogo}</AppName>{props.menus}</DrawerArea>
          </StyledDrawer></Overlay>:null
        }
      </Hidden>
      <Hidden xsDown>
        <StyledDrawer
          variant="permanent" open>
          <DrawerArea><AppName>{props.appLogo}</AppName>{props.menus}</DrawerArea>
          </StyledDrawer>
      </Hidden>
      <Content>
        {props.children}
      </Content>
    </>
  );
}
