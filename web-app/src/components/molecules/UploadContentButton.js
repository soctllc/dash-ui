import React,{useState} from 'react';
import styled from "styled-components";
import { UploadRoundButton } from '../atoms/Button';

export const UploadContentButton = (props) =>{
  return(
    <Div>
        <UploadRoundButton>動画をアップロード</UploadRoundButton>
        <div>動画をアップロードしてください</div>
    </Div>
  )
}

const Div = styled.div`
background: ${props => props.theme.palette.gray.gray01};
color: #BABAB9;
text-align: center;
width: 100vw;
height: 260px;
box-shadow: none;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
  margin:${props => props.theme.spacing(5)}px ${props => props.theme.spacing(2)}px ${props => props.theme.spacing(2)}px;
  width: 650px;
  height: 426.38px;
}
`