import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import {Caption} from '../atoms/Text'
import PhotoIcon from '@material-ui/icons/Photo';
import IconButton from '@material-ui/core/IconButton';

export const NamedAvatar = (props) => {
    const name = props.name;
    const caption = props.caption;
    const avatar = props.avatar;
    const onClick = props.onClick ? props.onClick : ()=>{};
    return(
        <RowWrap>
            <CircledAvatar src={avatar} onClick={onClick}/>
            <NameWrap>
                <Name>{name}</Name>
                <Caption>{caption}</Caption>
            </NameWrap>
        </RowWrap>);
}

export const EditableAvatar = (props) => {
    const title = props.title;
    const avatar = props.avatar;
    const required = props.required? props.required : false;
    const loading = props.loading ? props.loading : false;
    const onClick = props.onClick ? props.onClick : ()=>{};
    return(
        <Div>
            <EditableAvatarTitle data-required={required} variant="body1" gutterBottom>{title}</EditableAvatarTitle>
            <RoundedAvatar variant="rounded" src={avatar} onClick={onClick}>
            {loading ? <CircularProgress/> :<PhotoIcon/>}
              {!loading && <StyledIconButton><StyledAddAPhotoIcon color='primary'/></StyledIconButton>}
            </RoundedAvatar>
        </Div>
    );
}
export const EditableThumbnail = (props) => {
  const title = props.title;
  const avatar = props.avatar;
  const required = props.required? props.required : false;
  const loading = props.loading ? props.loading : false;
  const onClick = props.onClick ? props.onClick : ()=>{};
  return(
      <Div>
          <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
          <RoundedThumnail variant="rounded" src={avatar} onClick={onClick}>
              {loading ? <CircularProgress/> :<PhotoIcon/>}
              {!loading && <StyledIconButton><StyledAddAPhotoIcon color='primary'/></StyledIconButton>}
          </RoundedThumnail>
      </Div>
  );
}

export const MyMenuAvatar= (props) => {
    const title = props.title;
    const subtitle1 = props.subtitle1;
    const subtitle2 = props.subtitle2;
    const avatar = props.avatar;
    const required = props.required? props.required : false;
    const loading = props.loading ? props.loading : false;
    const onClick = props.onClick ? props.onClick : ()=>{};
    return(
        <MyMenuDiv>
            <RoundedAvatar variant="rounded" src={avatar} onClick={onClick}>
                {loading ? <CircularProgress/> :<AddAPhotoIcon/>}
            </RoundedAvatar>
            <div>
            <Maintitle data-required={required} variant="body1" gutterBottom>{title}</Maintitle>
            <Subtitle data-required={required} variant="body2" gutterBottom>{subtitle1}</Subtitle>
            <Subtitle data-required={required} variant="body2" gutterBottom>{subtitle2}</Subtitle>
            </div>
        </MyMenuDiv>
    );
}


export const CircledAvatar = styled(Avatar)`
    margin:${props => props.theme.spacing(1)}px;
`;

export const SmallAvatar = styled(Avatar)`
    width: ${props => props.theme.spacing(3)}px;
    height: ${props => props.theme.spacing(3)}px;
`

const RowWrap = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:row;
    align-items: center;
`

const NameWrap = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:column;
`;

const Name = styled(Typography).attrs({
    variant:'body1',
})`
    margin:${props => props.theme.spacing(1)}px ${props => props.theme.spacing(2)}px 0;
    font-weight:700;
`
const Div = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:column;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        flex-direction:row;
    }
`
const Title = styled(Typography)`
    margin:${props => props.theme.spacing(4)}px ${props => props.theme.spacing(2)}px 0;
    font-weight:700;
    width:calc(240px - ${props => props.theme.spacing(2)}px * 3);
    &[data-required="true"] {
        &::after{
          content:'*';
          margin-left:${props => props.theme.spacing(2)}px;
          font-size:14px;
          color:red;
        }
    }
`

const EditableAvatarTitle = styled(Typography)`
    @media screen and (min-width: ${(props) =>
        props.theme.breakpoints.values.sm}px) {
            margin:${props => props.theme.spacing(4)}px ${props => props.theme.spacing(2)}px 0;
            font-weight:700;
            width:calc(240px - ${props => props.theme.spacing(2)}px * 3);
            &[data-required="true"] {
                &::after{
                  content:'*';
                  margin-left:${props => props.theme.spacing(2)}px;
                  font-size:14px;
                  color:red;
                }
            }
            color: #000;
        }
        margin: ${props => props.theme.spacing(2)}px auto;
        width: 143px;
        height: 19px;        
        font-family: Noto Sans JP;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 19px;
        /* identical to box height */
        text-align: center;
        color: #2E7DF6;
`

const MyMenuDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:row;
`
const Maintitle= styled(Typography)`
margin:${props => props.theme.spacing(2)}px ${props => props.theme.spacing(2)}px 0;
font-weight:700;
width:calc(240px - ${props => props.theme.spacing(2)}px * 4);
&[data-required="true"] {
    &::after{
      content:'*';
      margin-left:${props => props.theme.spacing(2)}px;
      font-size:14px;
      color:red;
    }
}
`
const Subtitle = styled(Typography)`
    margin:${props => props.theme.spacing(1)}px ${props => props.theme.spacing(2)}px 0;
    font-weight:700;
    width:calc(240px - ${props => props.theme.spacing(2)}px * 4);
    &[data-required="true"] {
        &::after{
          content:'*';
          margin-left:${props => props.theme.spacing(2)}px;
          font-size:14px;
          color:red;
        }
    }
`


const RoundedAvatar = styled(Avatar)`
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    margin: ${props => props.theme.spacing(2)}px 0;
    height: 120px;
    width: 120px;
    border-radius: 16px;
}
    margin:${props => props.theme.spacing(2)}px auto;
    height: 90px;
    width: 90px;
    border-radius: 16px;
`;

const RoundedThumnail = styled(Avatar)`
position:relative;
margin:${props => props.theme.spacing(2)}px;
height: 126px;
width: 160px;
border-radius: 16px;
background: ${props => props.theme.palette.gray.gray01};
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){

}
`;

const StyledIconButton = styled(IconButton)`
background: #ffffff;
position: absolute;
width: 38px;
height: 38px;
bottom: 8px;
right: 10px;
background: #FFFFFF;
box-shadow: 0px 2px 10px rgba(92, 92, 92, 0.5);
`;

const StyledAddAPhotoIcon = styled(AddAPhotoIcon)`
width: 21.11px;
height: 21.11px;
`;
