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
      <StyledBottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <StyledBottomNavigationAction label="Like" icon={<RestoreIcon />} />
      <StyledBottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <StyledBottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
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
touch-action: none
`;

const  StyledBottomNavigationAction = styled(BottomNavigationAction)`
font-weight: 700;
touch-action: none;
&:action {
  background-color: #00B900;
  opacity: 0.7;

}
`
