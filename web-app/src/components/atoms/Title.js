import React from 'react';
import Typography from '@material-ui/core/Typography';
import PublicIcon from '@material-ui/icons/Public';
import styled from "styled-components";
import { FlexWrap } from './Paper';

export const PageTitle = styled(Typography).attrs({
    varient: 'h2',
})`
    font-size: 1.4rem;
    font-weight:700;
    margin:${props => props.theme.spacing(3)}px ${props => props.theme.spacing(2)}px;
    vertical-align: top
`

export const SubTitle = (props) => {
    const {
        text
    } = props;
    return (
        <>
            <Div>
                <FlexWrap>
                    <PublicIcon style={{ color: '#87ADE0' }} />
                    <SubTitleStyle>
                        {text}
                    </SubTitleStyle>
                </FlexWrap>
                <UnderBar />
            </Div>
        </>
    );
}

const SubTitleStyle = styled(Typography).attrs({
    varient: 'h2',
})`
width: 56px;
height: 20px;
font-family: Noto Sans JP;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 20px;
color: #87ADE0;
margin: ${props => props.theme.spacing(0.2)}px ${props => props.theme.spacing(1)}px;
vertical-align: top;
`

const UnderBar = styled.div`
width: 100%;
height: 0px;
border: 1px solid #87ADE0;
margin-top: 9px;
`

const Div = styled.div`
margin:${props => props.theme.spacing(4)}px ${props => props.theme.spacing(2)}px 0;
margin-bottom: 37px;
`