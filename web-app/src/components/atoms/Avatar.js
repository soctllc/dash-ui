import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import {Caption} from '../atoms/Text'

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
            <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
            <RoundedAvatar variant="rounded" src={avatar} onClick={onClick}>
                {loading ? <CircularProgress/> :<AddAPhotoIcon/>}
            </RoundedAvatar>
        </Div>
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


const RoundedAvatar = styled(Avatar)`
    margin:${props => props.theme.spacing(2)}px;
    height: 80px;
    width: 80px;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        height: 120px;
        width: 120px;
        border-radius: 16px;
    }
`;