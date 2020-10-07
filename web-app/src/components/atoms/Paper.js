import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from "styled-components"

export const FullPaper = styled(Paper)`
  margin:${props => props.theme.spacing(2)}px;
  padding:${props => props.theme.spacing(1)}px;
  width:calc( 100% - ${props => props.theme.spacing(3)}px * 2);
`;

export const HalfPaper = styled(Paper)`
  margin:${props => props.theme.spacing(2)}px 0 ${props => props.theme.spacing(2)}px ${props => props.theme.spacing(2)}px;
  padding:${props => props.theme.spacing(1)}px;
  width:calc( 100% - ${props => props.theme.spacing(3)}px * 2);
  
  overflow:hidden;
  @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    width:calc( 50% - ${props => props.theme.spacing(3)}px * 2);
  }
`;

export const FlexWrap = styled.div`
  width:100%;
  display: flex;
  flex-wrap: wrap;
`