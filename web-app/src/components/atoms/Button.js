import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export const BasicButton = (props) => {
    const disabled = props.disabled ? props.disabled : false;
    const onClick = props.onClick ? props.onClick : ()=>{};
    return(
        <StyledButton variant="contained" color="primary" disabled={disabled} onClick={onClick}>
            {props.children}
        </StyledButton>
    )
}

export const SmallButton = styled(Button).attrs({
    variant:"outlined",
    color:"primary"
})`
    margin:${props => props.theme.spacing(0.5)}px;
`;

export const UploadButton = (props) => {
    const title = props.title;
    const required = props.required? props.required : false;
    const disabled = props.disabled ? props.disabled : false;
    const onClick = props.onClick ? props.onClick : ()=>{};
    return(
        <Div>
        <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
        <UpButton Button startIcon={<CloudUploadIcon />} variant="outlined" color="primary" disabled={disabled} onClick={onClick}>
            {props.children}
        </UpButton>
        </Div>
    )
}


const StyledButton = styled(Button)`
    width:calc(100% - ${props => props.theme.spacing(4)}px * 2);
    margin:${props => props.theme.spacing(4)}px;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        width:327px;
    }
`;

const UpButton = styled(StyledButton)`
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        margin:${props => props.theme.spacing(4)}px ${props => props.theme.spacing(2)}px;
    }
`

const Div = styled.div`
    display:flex;
    flex-wrap: wrap;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
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