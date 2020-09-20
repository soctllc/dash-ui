import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';

export const DatePicker = (props) => {
    const title = props.title;
    const value = props.value;
    const required = props.required? props.required : false;
    const onChange = props.onChange ? props.onChange : ()=>{}; 
    return(
        <Div>
        <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <StyledPicker 
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="yyy/MM/dd"
          value={value}
          onChange={onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        </Div>
    );
}

const StyledPicker = styled(KeyboardDatePicker)`
    margin:${props => props.theme.spacing(2)}px;
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