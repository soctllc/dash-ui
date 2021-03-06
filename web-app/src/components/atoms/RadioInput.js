import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';


export const RadioInput = (props) => {
    const title = props.title;
    const label = props.label;
    const helperText = props.helperText;
    const required = props.required? props.required : false;
    const items = props.items? props.items : [];
    const onChange = props.onChange ? props.onChange : ()=>{}; 
    return(
        <Div>
            <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
            <StyledForm component="fieldset">
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup aria-label={label} name={label} value={props.value} onChange={onChange}>
                    {items.map((item,index) => (
                        <FormControlLabel key={index} value={item.value} control={<Radio />} label={item.label} />
                    ))}
                </RadioGroup>
                <FormHelperText>{helperText}</FormHelperText>
      </StyledForm>
      </Div>
    )
}

export const RadioImages = (props) => {
    const title = props.title;
    const label = props.label;
    const required = props.required? props.required : false;
    const items = props.items? props.items : [];
    const onChange = props.onChange ? props.onChange : ()=>{}; 
    return(
        <Div>
            <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
            <StyledForm component="fieldset">
                <FormLabel component="legend">{label}</FormLabel>
                <StyledGroup value={props.value} onChange={onChange}>
                    {items.map((item,index) => (
                        <FormControlLabel key={index} value={item.src} control={<Radio icon={<Img src={item.src} />} checkedIcon={<Img data-checked={true} src={item.src} />}/>}/>
                    ))}
                </StyledGroup>
      </StyledForm>
      </Div>
    )
}

const StyledForm = styled(FormControl)`
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

const Img = styled.img`
    height:80px;
    width:auto;
    backgroun-image;
    &[data-checked="true"] {
        border:solid 3px ${props => props.theme.palette.primary.light};
        height:74px;
        border-radius:8px;
    }
`

const StyledGroup = styled(RadioGroup)`
    display: flex;
    flex-wrap: wrap;
    flex-direction:row;
`;