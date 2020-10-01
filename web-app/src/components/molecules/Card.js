import React from 'react';
import {HalfPaper} from '../atoms/Paper'
import {BodyTitle,BodyText,Caption} from '../atoms/Text'
import {NamedAvatar} from '../atoms/Avatar'
import { SmallButton } from '../atoms/Button';
import IconButton from '@material-ui/core/IconButton';
import styled from "styled-components"

export const UserCard = (props) => {
    const icons = props.icons ? props.icons : [];
    return(
       <HalfPaper>
        <Div>
            <NamedAvatar name={props.name} caption={props.caption}/>
        </Div>
        <Hr/>
        <ButtonWrap>
            <Icons>
                {icons.map((item,index) => (
                    <IconButton href={item.href}>{item.icon}</IconButton>
             ))}
            </Icons>
            <SmallButton>Edit</SmallButton>
        </ButtonWrap>    
       </HalfPaper>
    );
};

const Div = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction:column;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
        flex-direction:row;
    }
`

const ButtonWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left:${props => props.theme.spacing(1)}px
`;

const Icons = styled.span`
     > * {
        padding:${props => props.theme.spacing(1)}px;
        color:${props => props.theme.palette.grey[400]};
     }
`

const Hr = styled.hr`
    height:1px;
    background-color:${props => props.theme.palette.grey[200]};
    border: none;
`;