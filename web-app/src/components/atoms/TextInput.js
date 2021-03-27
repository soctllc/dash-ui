import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    doneIcon: {
        color: '#27AE60'
    },
    errorIcon: {
        color: '#DC3545'
    },
    cancelIcon: {
        cursor: 'pointer',
        color: '#DADADA'
    },
}));

export const SingleTextInput = (props) => {
    const title = props.title;
    const label = props.label;
    let value = props.value;
    const helperText = props.helperText;
    const placeholder= props.placeholder;
    const status = props.status;
    const required = props.required ? props.required : false;
    const onChange = props.onChange ? props.onChange : () => { };
    const classes = useStyles();
    const clearText = () => {
        // 文字列クリアの処理
      };
    return (
        <Div>
            <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
            <Field
                helperText={helperText}
                label={label}
                variant="outlined"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                InputProps={{
                    endAdornment:
                        <InputAdornment position="end">
                            {status === 'done' ?
                                <DoneIcon
                                    className={classes.doneIcon}
                                /> :
                                status === 'error' ?
                                    <ErrorIcon
                                        className={classes.errorIcon}
                                    /> :
                                    status === 'cancel' ?
                                        <HighlightOffIcon
                                            className={classes.cancelIcon}
                                            onClick={() => clearText()}
                                        /> :
                                        null}
                        </InputAdornment>,
                }}
                InputLabelProps={{
                    //shrink: true,
                    style: {
                        color: '#B0B0B0',
                    },
                }}
            />
        </Div>
    );
}

export const SingleTextRegistration = (props) => {
    const title = props.title;
    const value = props.value
    const helperText = props.helperText;
    const placeholder= props.placeholder;
    const required = props.required ? props.required : false;
    const onChange = props.onChange ? props.onChange : () => { };
    const classes = useStyles();
    const history = useHistory();
    return (
        <Div>
            <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
            <Field
                helperText={helperText}
                variant="outlined"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                InputProps={{
                    readOnly: true,
                    endAdornment:
                        <InputAdornment position="end">
                            <AddIcon
                                className={classes.photo}
                                onClick={() => history.push('/myMenu')}
                            />
                        </InputAdornment>,
                }}
            />

        </Div>
    );
}

export const MultiLineTextInput = (props) => {
    const title = props.title;
    const rows = props.rows ? props.rows : 5;
    const label = props.label;
    const value = props.value;
    const helperText = props.helperText;
    const required = props.required? props.required : false;
    const onChange = props.onChange ? props.onChange : ()=>{};
    return(
        <Div>
            <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
            <Field
                multiline
                helperText={helperText}
                rows={rows}

                label={label}
                value={value}
                variant="outlined"
                onChange={onChange}
            />
        </Div>
    );
}

export const SearchTextInput = (props) => {
  const title = props.title;
  const label = props.label;
  const value = props.value;
  const helperText = props.helperText;
  const required = props.required? props.required : false;
  const onChange = props.onChange ? props.onChange : ()=>{};
  return(
      <Div>
          <RoundField
              helperText={helperText}
              label={label}
              variant="outlined"
              value={value}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <SearchIcon />
                </InputAdornment>
                )
                }}
              onChange={onChange}
          />
      </Div>
  );
}

export const AvatarText = (props) => {
  const [onfocusing, setOnFocusing] = useState(false);
  const value = props.value
  const helperText = props.helperText;
  const placeholder= props.placeholder;
  const avatar = props.avatar;
  const required = props.required ? props.required : false;
  const onChange = props.onChange ? props.onChange : () => { };
  const classes = useStyles();
  const history = useHistory();
  const onFocus = () => {
    setOnFocusing(true);
  };
  const onBlur =() =>{
    setOnFocusing(false);
  }
  return (
      <Wrap>
      <Line/>
      <StyledDiv>
          <div>
          <CircledAvatar src={avatar}/>
          </div>
          <StyledRoundField
              onFocus={onFocus}
              onBlur={onBlur}
              helperText={helperText}
              multiline
              variant="outlined"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              InputProps={{
                endAdornment: onfocusing &&<Save>保存</Save>
              }}
          />
      </StyledDiv>
      <Line/>
      </Wrap>
  );
}



export const CircledAvatar = styled(Avatar)`
    margin:${props => props.theme.spacing(2)}px ${props => props.theme.spacing(1)}px  ${props => props.theme.spacing(1)}px ${props => props.theme.spacing(1)}px;
`;


const Field = styled(TextField)`
    margin: ${props => props.theme.spacing(2)}px;
    flex:1;
    //.MuiOutlinedInput-input {
    //    padding: 18.5px 14px;
    //}
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        width: 357px;
    }
`;

const RoundField= styled(TextField)`
margin:${props => props.theme.spacing(2)}px;
width:100%;
.MuiOutlinedInput-adornedStart{
  border-radius:16px;
}
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    width:375px;
}
`;



const StyledRoundField= styled(TextField)`
margin:${props => props.theme.spacing(2)}px;
flex:1;
marign-left: ${props => props.theme.spacing(1.5)}px;
margin-right: ${props => props.theme.spacing(2)}px;
.MuiOutlinedInput-root {
  border-radius:32px;
}
.MuiOutlinedInput-multiline {
  padding: 0;
}
.MuiOutlinedInput-input {
  padding: 11.5px 17px 12px 17px;
  width: calc(100% - 85px);
}
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){

}
`;


const Div = styled.div`
    display:flex;
    flex-wrap: wrap;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    }
`
const StyledDiv = styled(Div)`
align-items: flex-start;
width: 100%;

`;

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
`

const ComplementTitle = styled(Typography)`
margin:${props => props.theme.spacing(4)}px ${props => props.theme.spacing(2)}px 0;
font-weight:700;
color: ${props => props.theme.palette.secondary.main}
width:calc(240px - ${props => props.theme.spacing(2)}px * 3);
&[data-required="true"] {
    &::after{
      content:'*';
      margin-left:${props => props.theme.spacing(2)}px;
      font-size:14px;
      color:red;
    }
}
`
const WrapButton = styled(Button)`
    z-index:999;
    background: red;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        position: relative;
        width:375px;
        height: 54px;
        background: red;
        margin:${props => props.theme.spacing(2)}px 0;
    }
`;
const Save = styled.div`
    color:#2E7DF6;
    font-weight: bold;
    position: absolute;
    right: 16px;
    bottom: 15px;
`;

const Wrap = styled.div`
width: 100%;
`;

const Line = styled.div`
width: 100vw;
height: 1px;
background: #DDDDDD;
margin-left: -${props => props.theme.spacing(1)}px
`;
