import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';


export const SelectInput = (props) => {
    const title = props.title;
    const value = props.value;
    const helperText = props.helperText;
    const required = props.required? props.required : false;
    const items = props.items? props.items : [];
    const onChange = props.onChange ? props.onChange : ()=>{}; 
  return(
    <Div>
    <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
    <StyledForm variant="outlined">
    <StyledSelect
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      onChange={onChange}
      value={value}
    >
      {items.map((item,index) => (
        <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
      ))}
    </StyledSelect>
    <FormHelperText>{helperText}</FormHelperText>
    </StyledForm>
  </Div>
  );
}

const StyledSelect = styled(Select)`
    margin:${props => props.theme.spacing(2)}px;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
      width:240px;
    }
    
`
const StyledForm = styled(FormControl)`
    
    width:375px;
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