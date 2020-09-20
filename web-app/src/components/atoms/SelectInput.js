import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';

export const SelectInput = (props) => {
    const title = props.title;
    const label = props.label;
    const required = props.required? props.required : false;
    const items = props.items? props.items : [];
  return(
    <Div>
    <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
    <FormControl variant="outlined">
    <StyledSelect
      labelId="demo-simple-select-label"
      id="demo-simple-select"
    >
      {items.map((item,index) => (
        <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
      ))}
    </StyledSelect>
    </FormControl>
  </Div>
  );
}

const StyledSelect = styled(Select)`
    margin:${props => props.theme.spacing(2)}px;
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