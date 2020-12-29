import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.gray.gray01,
      '& + $track': {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 'none',
      },
    },
    backgroundColor: '#F0F0F0',
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `none`,
    backgroundColor:  theme.palette.gray.gray03,
    opacity: 1,
    height:'auto',
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export const SimpleSwitch = (props) => {
    const title = props.title;
    const label = props.label;
    const value = props.value;
    const helperText = props.helperText;
    const required = props.required? props.required : false;
    const onChange = props.onChange ? props.onChange : ()=>{};
    return(
        <Div>
            <Title data-required={required} variant="body1" gutterBottom>{title}</Title>
            <FormGroup>
            <StyledFormControlLabel
             control={<IOSSwitch checked={props.checkedB} onChange={props.handleChange} name="checkedB" />}
             label="iOS style"
            />
            </FormGroup>
        </Div>
    );
}


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

const StyledFormControlLabel = styled(FormControlLabel)`
 margin:${props => props.theme.spacing(1)}px ;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
  margin:${props => props.theme.spacing(4)}px ${props => props.theme.spacing(1)}px;
}
`