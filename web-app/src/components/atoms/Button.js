import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import MovieIcon from '@material-ui/icons/Movie';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    photo: {
        cursor: 'pointer',
        color: '#BABAB9',
    },
}));

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
        <UpButton startIcon={<CloudUploadIcon />} variant="outlined" color="primary" disabled={disabled} onClick={onClick}>
            {props.children}
        </UpButton>
        </Div>
    )
}

export const UploadRoundButton = (props) => {
  const disabled = props.disabled ? props.disabled : false;
  const onClick = props.onClick ? props.onClick : ()=>{};
  return(
      <RoundButton startIcon={<MovieIcon />} variant="outlined" color="primary" disabled={disabled} onClick={onClick} >
          {props.children}
      </RoundButton>
  )
}

export const IconButton = (props) => {
    const title = props.title;
    const icon = props.icon;
    const required = props.required? props.required : false;
    const disabled = props.disabled ? props.disabled : false;
    const onClick = props.onClick ? props.onClick : ()=>{};
    return(
        <Div>
        <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
        <UpButton startIcon={icon} variant="outlined" color="primary" disabled={disabled} onClick={onClick}>
            {props.children}
        </UpButton>
        </Div>
    )
}

export const UploadDottedButton = (props) => {
  const disabled = props.disabled ? props.disabled : false;
  const onClick = props.onClick ? props.onClick : ()=>{};
  const title = props.title;
  const required = props.required? props.required : false;
  return(
    <Div>
    <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
      <DottedButton endIcon={<PictureAsPdfIcon />} variant="outlined" color="primary" disabled={disabled} onClick={onClick} >
          {props.children}
      </DottedButton>
        </Div>
    )
}

export const UploadRegistrationButton = (props) => {
    const disabled = props.disabled ? props.disabled : false;
    const onClick = props.onClick ? props.onClick : () => { };
    const title = props.title;
    const required = props.required ? props.required : false;
    const classes = useStyles();
    return (
        <Div>
            <Title
                data-required={required}
                variant="body1"
                gutterBottom
            >
                {title}
            </Title>
            <SimpleButton
                endIcon={<AddIcon
                    className={classes.photo}
                    onClick={onClick}
                />}
                variant="outlined" color="primary"
                disabled={disabled}
                onClick={onClick}
            >
                {props.children}
            </SimpleButton>
        </Div>
    )
}

export const DeleteContentButton = (props) => {
  const disabled = props.disabled ? props.disabled : false;
  const onClick = props.onClick ? props.onClick : ()=>{};
  const title = props.title;
  const required = props.required? props.required : false;
  return(
    <Div>
    <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
      <FileNameWrap>
      <FileName noWrap={true} component='div'>fileNamefileNamefileNamefileNamefileNamefileName</FileName>
      <DeleteButton　onClick={onClick} disabled={disabled}>削除</DeleteButton>
      </FileNameWrap>
    </Div>
  )
}

export const FollowButton = (props) =>{
  const value = props.value ? props.value : false;
  const onClick = props.onClick ? props.onClick : ()=>{};
  return (
      <StyledFollowedButton
      onClick={onClick}
      variant ={value ? 'outlined' : 'contained'}
      color ={'secondary'}
      >{!value ? 'フォロー' : 'フォロー中'}
     </StyledFollowedButton>
  )
}

export const LikeButton = (props) =>{
  const value = props.value ? props.value : false;
  const onClick = props.onClick ? props.onClick : ()=>{};
  return (
      <StyledRoundIcon
      onClick={onClick}
      variant ={'outlined'}
      color ={value ? 'secondary' : 'default'}
      value={value}
      ><ThumbUpAltOutlinedIcon/>
     </StyledRoundIcon>
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
`;

const DeleteButton= styled(Button)`
width: 59px;
height: 40px;
background: #F4F4F4;
border: 1px solid #CED4D4;
box-sizing: border-box;
border-radius: 4px;
`;

const RoundButton = styled(Button)`
width: 208px;
height:49.2px;
background: #FFFFFF;
box-shadow: 0px 2px 10px rgba(92, 92, 92, 0.2);
border-radius: 38px;
border:none;
font-weight: bold;
margin-top: 105.4px;
margin-bottom:${props => props.theme.spacing(2)}px;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    margin-top: 188.59px;
    margin-bottom:${props => props.theme.spacing(2.5)}px;
}
`;

const DottedButton = styled(Button)`
margin:${props => props.theme.spacing(4)}px  ${props => props.theme.spacing(2)}px ;
.MuiButton-endIcon {
  position:absolute;
  right: 12px;
}
.MuiButton-label {
  justify-content: flex-start;
}
width: 100%;
height: 45px;
background: #FFFFFF;
border: 1px dashed #CED4D4;
box-sizing: border-box;
border-radius: 4px;
margin-bottom:${props => props.theme.spacing(2)}px;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
  width: 375px;
  height: 45px;
}
`;

const SimpleButton = styled(Button)`
margin:${props => props.theme.spacing(3)}px  ${props => props.theme.spacing(2)}px ;
.MuiButton-endIcon {
  position:absolute;
  right: 12px;
}
.MuiButton-label {
  justify-content: flex-start;
}
width: 100%;
height: 45px;
background: #FFFFFF;
color: #B0B0B0;
border: 1px solid #CED4D4;
box-sizing: border-box;
border-radius: 4px;
margin-bottom:${props => props.theme.spacing(2)}px;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
  width: 241px;
  height: 45px;
}
`;

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
`;

const FileNameWrap = styled.div`
display: flex;
justify-content: space-between;
width:calc(100% - ${props => props.theme.spacing(2)}px * 2);
margin:${props => props.theme.spacing(4)}px  ${props => props.theme.spacing(2)}px ${props => props.theme.spacing(2)}px ;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    width:375px;
}
`

const FileName = styled(Typography)`
    font-weight:500;
    width:calc(240px - ${props => props.theme.spacing(2)}px * 3);
`;

const StyledFollowedButton = styled(Button)`
width: 103px;
height: 30px;
box-sizing: border-box;
border-radius: 40px;
z-index:9999;
}
`;

const StyledRoundIcon =  styled(Button)`
height: 34px;
border-radius: 38px;

`