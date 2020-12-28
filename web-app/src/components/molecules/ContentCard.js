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
    return(
       <StyledCard>
        <CardActionArea>
        <StyledCardMedia
        image='https://image.jimcdn.com/app/cms/image/transf/dimension=origxorig:format=jpg/path/s9952fd50fa8c415e/image/i583e2af84568bc57/version/1405748325/%E7%84%BC%E3%81%8D%E3%81%9F%E3%81%A6%E6%89%8B%E4%BD%9C%E3%82%8A%E3%83%91%E3%83%B3%E3%81%A8%E7%84%BC%E3%81%8D%E8%8F%93%E5%AD%90%E3%81%AE%E3%81%8A%E5%BA%97-%E3%83%91%E3%83%B3%E5%B7%A5%E6%88%BF%E3%83%B4%E3%82%A3%E3%82%A8%E3%83%8E%E3%83%AF.jpg'
        title="Contemplative Reptile"
        />
        <StyledCardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
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

const Icons = styled.span`
     > * {
        padding:${props => props.theme.spacing(1)}px;
        color:${props => props.theme.palette.grey[400]};
     }
`

const Hr = styled.hr`
    height:1px;
    background-color:${props => props.theme.palette.grey[200]};
    border: none;
`;