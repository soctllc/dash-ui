import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"

export const PageTitle = styled(Typography).attrs({
        varient:'h2',
})`
    font-size: 1.4rem;
    font-weight:700;
    margin:${props => props.theme.spacing(3)}px ${props => props.theme.spacing(2)}px;
    vertical-align: top
`