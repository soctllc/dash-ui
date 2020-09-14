import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from "styled-components"

export const FullPaper = styled(Paper)`
  margin:${props => props.theme.spacing(2)}px;
  width:calc( 100% - ${props => props.theme.spacing(2)}px * 2);
`;

export const HalfPaper = styled(Paper)`
  margin:${props => props.theme.spacing(2)}px;
  width:calc( 100% - ${props => props.theme.spacing(2)}px * 2);
  @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    width:calc( 50% - ${props => props.theme.spacing(2)}px * 3);
  }
`;
