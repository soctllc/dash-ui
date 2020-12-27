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

export const AddContentCard = (props) => {
    const name = props.name;
    const caption = props.caption;
    const avatar = props.avatar;
    const icons = props.icons ? props.icons : [];
    const onClick = props.onClick ? props.onClick : ()=>{};
    return(
       <Card>
        <Div>
            <NamedAvatar avatar={avatar} name={name} caption={caption}/>
        </Div>
        <Hr/>
        <ButtonWrap>
            <Icons>
                {icons.map((item,index) => (
                    <IconButton key={index} href={item.href}>{item.icon}</IconButton>
             ))}
            </Icons>
            <SmallButton onClick={onClick}>Edit</SmallButton>
        </ButtonWrap>    
       </Card>
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
        <StyledCardMedia 
        image='https://image.jimcdn.com/app/cms/image/transf/dimension=origxorig:format=jpg/path/s9952fd50fa8c415e/image/i583e2af84568bc57/version/1405748325/%E7%84%BC%E3%81%8D%E3%81%9F%E3%81%A6%E6%89%8B%E4%BD%9C%E3%82%8A%E3%83%91%E3%83%B3%E3%81%A8%E7%84%BC%E3%81%8D%E8%8F%93%E5%AD%90%E3%81%AE%E3%81%8A%E5%BA%97-%E3%83%91%E3%83%B3%E5%B7%A5%E6%88%BF%E3%83%B4%E3%82%A3%E3%82%A8%E3%83%8E%E3%83%AF.jpg'
        title="Contemplative Reptile"
        />
        <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
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
`

const StyledCardMedia = styled(CardMedia)`
    width:153px;   
    height : 108px;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    width:250px;
    height:176px;
}
`

const Div = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:column;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        flex-direction:row;
    }
`

const ButtonWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left:${props => props.theme.spacing(1)}px
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