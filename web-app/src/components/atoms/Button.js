import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "styled-components"

export const BasicButton = (props) => {
    const disabled = props.disabled ? props.disabled : false;
    const onClick = props.onClick ? props.onClick : ()=>{};
    return(
        <StyledButton variant="contained" color="primary" disabled={disabled} onClick={onClick}>
            {props.children}
        </StyledButton>
    )
}

const StyledButton = styled(Button)`
    width:calc(100% - ${props => props.theme.spacing(4)}px * 2);
    margin:${props => props.theme.spacing(4)}px;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        width:327px;
    }
`;