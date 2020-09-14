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
        <ListItem onClick={()=> history.push(item.path)} key={index} button>
         <Icon>
           {item.icon}
         </Icon>
         <Text primary={item.text} />
       </ListItem>
      ))}
     </List>
  )
}

const Text = styled(ListItemText)`
  color:white;
`

const Icon = styled(ListItemIcon)`
  color:white;
`
