import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import styled from "styled-components"

export const AppLogo = (props) => {
  return(
    <ListItem button>
     <Icon>
       <FlashOnIcon/>
     </Icon>
     <Text primary="SOCT DASH" />
   </ListItem>
  )
}

const Text = styled(ListItemText)`
  color:white;
`

const Icon = styled(ListItemIcon)`
  color:white;
`
