import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"

export const BodyTitle = styled(Typography).attrs({
    variant:'h6',
})`
    margin:${props => props.theme.spacing(1)}px ${props => props.theme.spacing(2)}px 0;
    font-weight:700;
`

export const BodyText = styled(Typography).attrs({
    variant:'body1',
})`
    margin:${props => props.theme.spacing(1)}px ${props => props.theme.spacing(2)}px ${props => props.theme.spacing(2)}px;
    font-weight:400;
`

export const Caption = styled(Typography).attrs({
    variant:'body2',
})`
    margin:${props => props.theme.spacing(1)}px ${props => props.theme.spacing(2)}px ${props => props.theme.spacing(2)}px;
    font-weight:300;
`