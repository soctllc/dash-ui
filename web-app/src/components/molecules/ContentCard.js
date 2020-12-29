import React from 'react';
import {HalfPaper} from '../atoms/Paper'
import {NamedAvatar} from '../atoms/Avatar'
import { SmallButton } from '../atoms/Button';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { Skeleton } from '@material-ui/lab';

export const AddContentCard = (props) => {
    const name = props.name;
    const caption = props.caption;
    const avatar = props.avatar;
    const icons = props.icons ? props.icons : [];
    const onClick = props.onClick ? props.onClick : ()=>{};
    return(
       <AddCardWrap>
         <CardActionArea>
        <StyledAddCard>
          <DivAdd>
            <DivHorizontal/>
            <DivVertical/>
          </DivAdd>
        </StyledAddCard>
        </CardActionArea>
        <ButtonWrap>{'動画を追加する'}</ButtonWrap>
       </AddCardWrap>
    );
};



export const ContentCard = (props) => {
    const name = props.name;
    const caption = props.caption;
    const avatar = props.avatar;
    const icons = props.icons ? props.icons : [];
    const onClick = props.onClick ? props.onClick : ()=>{};
    const thumbUrl = props ? props.thumbUrl ? props.thumbUrl : '' : null;
    const title = props ? props.title ? props.title : '': null;
    const description = props ? props.description ? props.description : '' : null;
    return(
       <StyledCard>
        <CardActionArea>
        {thumbUrl ? <StyledCardMedia
        image={thumbUrl}
        /> : <StyledSkeletonMedia variant="rect" /> }
        <StyledCardContent>
          <StyleTitle  variant="body1" component="div" noWrap={true}>
           {title ? title :<Skeleton variant="text" /> }
          </StyleTitle>
          <StyleDescription variant="body2" color="textSecondary" component="div">
           {description ? description : <Skeleton variant="text" />}
          </StyleDescription>
        </StyledCardContent>
        </CardActionArea>
       </StyledCard>
    );
};

const StyledCard = styled(Card)`
    margin:${props => props.theme.spacing(2)}px ${props => props.theme.spacing(2)}px 0;
    width:153px;
    box-shadow: none;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        width:250px;
    }
`;

const StyledAddCard = styled(Card)`
    width:153px;
    height: 108px;
    border: 3px solid ${props => props.theme.palette.primary.main};
    box-sizing: border-box;
    box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.35);
    border-radius: 4px;
    text-algin: center;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        width:250px;
        height: 176px;
    }
`;

const StyledCardMedia = styled(CardMedia)`
    width:153px;
    height : 108px;
    box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.35);
    border-radius: 4px;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    width:250px;
    height:176px;
}
`
const StyledSkeletonMedia = styled(Skeleton)`
width:153px;
height : 108px;
box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.35);
border-radius: 4px;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
width:250px;
height:176px;
}
`


const StyledCardContent = styled(CardContent)`
  padding: 0;
  width: 100%;
`

const AddCardWrap = styled.div`
margin:${props => props.theme.spacing(2)}px ${props => props.theme.spacing(2)}px 0;
width:153px;
text-align: center;
height: auto;
box-shadow: none;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    width:250px;
}
`

const DivAdd = styled.div`
position:relative;
margin: 32px auto;
width:35px;
height: 35px;
text-align: center;
height: auto;
box-shadow: none;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
  width:57px;
  height: 57px;
  margin:59px auto;
}
`
const DivHorizontal = styled.div`
position: absolute;
width:100%;
top: 17.5px;
border: 1px solid #000000;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    width:100%;
    top: 28.5px;
}
`
const DivVertical = styled.div`
height: 35px;
width:0;
border: 1px solid #000000;
text-align: center;
margin: 0 auto;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
  width:0;
  height: 57px;

}
`




const ButtonWrap = styled(Button)`
    width:auto;
    text-algin: center;
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.palette.primary.main};
    background: none;
    border-radius: 4px;
    margin-top:${props => props.theme.spacing(2)}px;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
      color: white;
      background:${props => props.theme.palette.primary.main};
      margin-top:${props => props.theme.spacing(3)}px;
      padding: 3px 22px 3px;
      &:hover {
        background:${props => props.theme.palette.primary.light};
      },
  }
`;

const StyleTitle = styled(Typography)`
font-weight: 700;
margin-top:${props => props.theme.spacing(1)}px;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
  margin-top:${props => props.theme.spacing(1.5)}px;
}
`;

const StyleDescription = styled(Typography)`
height: 60px;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
  height: 40px;
}
`;