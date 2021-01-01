import React,{useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from "styled-components";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const BasicTabs = (props) => {
    const [value, setValue] = useState(0);
    const contents = props.contents ? props.contents : [];
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return(
        <>
        <StyledTabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
        >
            {contents.map((item,index) => (
                <Tab key={index} label={item.label} />
            ))}

      </StyledTabs>
      {contents[value].content}
      </>
    )
}


export const CustomizedTabs = (props) => {
  const matches = useMediaQuery('(min-width:600px)');
  const [value, setValue] = useState(0);
  const contents = props.contents ? props.contents : [];
  const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return(
      <>
      <CustomizedTab
          value={value}
          indicatorColor="primary"
          textColor="primary"
          variant={!matches ? 'fullWidth' : 'standard'}
          onChange={handleChange}
          aria-label="disabled tabs example"
      >
          {contents.map((item,index) => (
              <Tab key={index} label={item.label} />
          ))}
    </CustomizedTab>
    {contents[value].content}
    </>
  )
}


const StyledTabs = styled(Tabs)`
    margin-left:${props => props.theme.spacing(2)}px;
`
const CustomizedTab = styled(Tabs)`
margin-left:${props => props.theme.spacing(2)}px;
margin-right:${props => props.theme.spacing(2)}px;
margin-bottom: ${props => props.theme.spacing(3)}px;
border-bottom: 1px solid ${props => props.theme.palette.gray.gray02};
 @media screen and (max-width: ${props => props.theme.breakpoints.values.sm}px){
    margin:0;
  }
`