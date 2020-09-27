import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import { BasicButton } from './Button';
import Typography from '@material-ui/core/Typography';

export const EditableAvatar = (props) => {
    const title = props.title;
    const label = props.label;
    const value = props.value;
    const avatar = props.avatar;
    const required = props.required? props.required : false;
    const loading = props.loading ? props.loading : false;
    const onClick = props.onClick ? props.onClick : ()=>{};
    return(
        <Div>
            <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
            <StyledAvatar variant="rounded" src={avatar} onClick={onClick}>
                {loading ? <CircularProgress/> :<AddAPhotoIcon/>}
            </StyledAvatar>
        </Div>
    );
}

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

const StyledAvatar = styled(Avatar)`
    margin:${props => props.theme.spacing(2)}px;
    height: 80px;
    width: 80px;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        height: 120px;
        width: 120px;
        border-radius: 16px;
    }
`;