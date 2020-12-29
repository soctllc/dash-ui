import React,{useState} from 'react';
import styled from "styled-components";
import { UploadRoundButton } from '../atoms/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const UploadContentButton = (props) =>{
  const loading = props.loading;
  const progress = props.progress;
  return(
    <Div>
      {!loading ?<>
        <UploadRoundButton>動画をアップロード</UploadRoundButton>
        <div>動画をアップロードしてください</div>
        </>
        :
        <StyledBox position="relative" display="inline-flex">
        <CircularProgress variant="static" {...props} value={progress} size={100} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StyledTypography variant="body1" component="div" color="primary" >{`${Math.round(
            progress
          )}%`}</StyledTypography>
        </Box>
      </StyledBox>
       }
    </Div>
  )
}

const Div = styled.div`
background: ${props => props.theme.palette.gray.gray01};
color: #BABAB9;
text-align: center;
width: 100vw;
height: 260px;
margin-left: -${props => props.theme.spacing(1)}px;
box-shadow: none;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
  margin:${props => props.theme.spacing(5)}px ${props => props.theme.spacing(2)}px ${props => props.theme.spacing(2)}px;
  width: 650px;
  height: 426.38px;
}
`

const StyledBox = styled(Box)`
position:relative;
display: inline-flex;
margin-top: 80px;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    margin-top: 150px;
}
`
const StyledTypography = styled(Typography)`
font-weight: 700;

`

