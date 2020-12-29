import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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

const Field = styled(TextField)`
    margin: ${props => props.theme.spacing(2)}px;
    width: 100%;
    //.MuiOutlinedInput-input {
    //    padding: 18.5px 14px;
    //}
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        width: 357px;
    }
    
`

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
`