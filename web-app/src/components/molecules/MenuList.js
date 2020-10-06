import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from "styled-components"
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
