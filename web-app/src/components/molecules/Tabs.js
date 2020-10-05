import React,{useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from "styled-components"

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

const StyledTabs = styled(Tabs)`
    margin-left:${props => props.theme.spacing(2)}px
`