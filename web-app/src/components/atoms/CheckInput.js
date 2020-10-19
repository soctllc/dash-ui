import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


export const CheckInput = (props) => {
    const title = props.title;
    const label = props.label;
    const helperText = props.helperText;
    const required = props.required? props.required : false;
    const items = props.items ? props.items : [];
    const onChange = props.onChange ? props.onChange : ()=>{}; 

    return(
        <Div>
            <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
            <StyledForm component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <FormGroup>
            {items.map((item,index) => (
                        <FormControlLabel key={index} value={item.value} control={<Checkbox
                            checked={item.checked}
                            onChange={() => onChange(index)} />} label={item.label} />
                    ))}
            </FormGroup>
            <FormHelperText>{helperText}</FormHelperText>
            </StyledForm>
        </Div>
    );
}

const StyledForm = styled(FormControl)`
    margin:${props => props.theme.spacing(2)}px;
    width:375px;
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
`