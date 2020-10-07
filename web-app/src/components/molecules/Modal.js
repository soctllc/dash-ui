import React from 'react';
import styled,{ keyframes } from "styled-components"
import {HalfPaper} from '../atoms/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {BodyTitle} from '../atoms/Text'

const open = keyframes`
    0% {
      width:0;
    }
    100% {
      width:calc( 100% - ${props => props.theme.spacing(3)}px * 2);
      @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        width:calc( 50% - ${props => props.theme.spacing(3)}px * 2);
      }
    }
`;

const fadeIn = keyframes`
    0% {
      opacity:0.1;
    }
    100% {
      opacity:1;
    }
`;

const Overlay = styled.div`
  animation: ${fadeIn} 0.2s ease-in-out;
  backdrop-filter: blur(6px);
  position:fixed;
  text-aling:center;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  z-index:${props => props.theme.zIndex.modal};
  padding-top:calc(${props => props.theme.gutter.sp} + ${props => props.theme.spacing(2)}px);
  @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    padding-top:calc(${props => props.theme.gutter.pc} + ${props => props.theme.spacing(2)}px);
  }
`

const Paper = styled(HalfPaper)`
  margin:0 auto;
  animation: ${open} 0.4s ease-in-out;
  max-height:calc(100vh - ${props => props.theme.gutter.pc} * 2 + ${props => props.theme.spacing(2)}px);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  height:${props => props.theme.gutter.sp};
  @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    height:${props => props.theme.gutter.pc};
  }
`

export const Modal = (props) => {
    const onClose = props.onClose ? props.onClose : ()=>{};
    const title = props.title ? props.title : null;
    const stopEvent = (e) => {
        e.stopPropagation()
    }
    return(<>
            <Overlay onClick={onClose} >
                <Paper onClick={stopEvent}>
                <Header>
                  <BodyTitle>{title}</BodyTitle>
                  <IconButton aria-label="delete" onClick={onClose}>
                    <CloseIcon />
                  </IconButton>
                </Header>
                    {props.children}
                </Paper>
            </Overlay>
        </>
    )
}