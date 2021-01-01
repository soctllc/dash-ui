import React, { useState} from 'react';
import styled from "styled-components";
import { StyledHalfFlexWrap} from '../atoms/Paper';
import { SmallProviderAvatar, ProviderAvatar } from '../atoms/Avatar';
import { FollowButton } from '../atoms/Button';
import ListItem from '@material-ui/core/ListItem';

export const SmallProviderCard = (props) => {
  const [ followed, setFollowed] = useState(false);
  const onChange = () =>{
    setFollowed(!followed)
  }
  return(
    <CustomizeStyledHalfFlexWrap>
      <StyledListItem button>
       <SmallProviderAvatar
          title={'プロバイダー'}
          subtitle1={'@provider.com'}
          subtitle2={'東京都品川区'}
        />
      </StyledListItem>
      <ButtonWrap>
        <FollowButton
          value={followed}
          onClick={onChange}
        />
      </ButtonWrap>

    </CustomizeStyledHalfFlexWrap>
  )
}

export const ProviderCard = (props) => {
  const [ followed, setFollowed] = useState(false);
  const onChange = () =>{
    setFollowed(!followed)
  }
  return(
    <CustomizeStyledHalfFlexWrap>
       <ProviderAvatar
          title={'プロバイダー'}
          subtitle1={'@provider.com'}
          subtitle2={'東京都品川区'}
        />
      <ButtonWrap>
        <FollowButton
          value={followed}
          onClick={onChange}
        />
      </ButtonWrap>
    </CustomizeStyledHalfFlexWrap>
  )
}

const CustomizeStyledHalfFlexWrap = styled(StyledHalfFlexWrap)`
  position: relative;
`;

const ButtonWrap = styled.div`
position: absolute;
right: ${props => props.theme.spacing(2)}px;
bottom: ${props => props.theme.spacing(5)}px;;
`;

const StyledListItem = styled(ListItem)`
padding-left: 0;

`