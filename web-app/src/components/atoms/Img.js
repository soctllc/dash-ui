import React from 'react';
import styled from "styled-components"

export const Img = styled.img`
    display:block;
    margin:${props => props.theme.spacing(4)}px;
    max-width:80%;
    height:auto;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        max-width:327px;
    }
`;