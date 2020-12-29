import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';


export const SingleTextInput = (props) => {
    const title = props.title;
    const label = props.label;
    const value = props.value;
    const helperText = props.helperText;
    const required = props.required? props.required : false;
    const onChange = props.onChange ? props.onChange : ()=>{};
    return(
        <Div>
            <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
            <Field
                helperText={helperText}
                label={label}
                variant="outlined"
                value={value}
                onChange={onChange}
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
    margin:${props => props.theme.spacing(2)}px;
    width:100%;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        width:375px;
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