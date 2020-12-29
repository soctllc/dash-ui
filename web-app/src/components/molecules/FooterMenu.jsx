import React,{useState} from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styled from 'styled-components';

export const FooterMenu = (props) =>{
  const [value, setValue] = React.useState(0);
  return (
    <StyledBottomNavigation
      value={value}
      onChange={(event, newValue) => {
        console.log(newValue)
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Like" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </StyledBottomNavigation>
  )
}

const StyledBottomNavigation = styled(BottomNavigation)`
width: 100vw;
height: 60px;
paddingBottom: env(safe-area-inset-bottom);
position: fixed;
z-index: 68;
bottom: 0;
`
