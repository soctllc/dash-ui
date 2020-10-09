import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {CircledAvatar} from '../atoms/Avatar'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from "styled-components"
import {HalfPaper} from '../atoms/Paper'
import {useHistory} from 'react-router-dom';

export const MenuList = (props) => {
  const menus = props.menus ? props.menus : [];
  const history = useHistory();
  return(
     <List component="nav" aria-label="main mailbox folders">
      {menus.map((item,index) => (
        <StyledItem onClick={()=> history.push(item.path)} key={index} button>
         <Icon>
           {item.icon}
         </Icon>
         <Text primary={item.text} />
       </StyledItem>
      ))}
     </List>
  )
}

export const FloatingMenu = (props) => {
  const menus = props.menus ? props.menus : [];
  const onClick = props.onClick ? props.onClick : ()=>{};
  return(
    <Card>
      <List component="nav" aria-label="main mailbox folders">
      {menus.map((item,index) => (
        <StyledItem onClick={() => onClick(index)} key={index} button>
         <Icon>
           {item.icon}
         </Icon>
         <Text primary={item.text} />
       </StyledItem>
      ))}
     </List>
    </Card>
  );
}

export const IconMenu = (props) => {
  const src = props.src;
  const menus = props.menus ? props.menus : [];
  const onClick = props.onClick ? props.onClick : ()=>{};
  const [open, setOpen] = React.useState(false);
  const handleMenu = () => {
   setOpen(!open);
 };
  return(
    <>
      <CircledAvatar src={src} onClick={()=>{handleMenu()}}/>
      {open?
      <MyCard>
      <List component="nav" aria-label="main mailbox folders">
      {menus.map((item,index) => (
        <StyledItem onClick={() => onClick(index)} key={index} button>
         <ListItemIcon>
           {item.icon}
         </ListItemIcon>
         <BoldText primary={item.text} />
       </StyledItem>
      ))}
     </List>
    </MyCard>
    :null}
    </>
  );
}

const MyCard = styled(HalfPaper)`
  position:absolute;
  top:${props => props.theme.gutter.sp};
  width:${props => props.theme.drawerWidth};
  @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    top:${props => props.theme.gutter.pc};
  }
`

const BoldText = styled(ListItemText)`
  > * {
    font-size:14px;
    font-weight:bold;
  }
`

const Card = styled(HalfPaper)`
    position:fixed;
    background:${props => props.theme.palette.primary.dark};
    z-index:${props => props.theme.zIndex.drawer};
    bottom:0;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        width:${props => props.theme.drawerWidth};
    }
`

const StyledItem = styled(ListItem)`
`;

const Text = styled(ListItemText)`
  color:white;
  > * {
    font-size:14px;
    font-weight:bold;
  }
`

const Icon = styled(ListItemIcon)`
  color:white;
`
