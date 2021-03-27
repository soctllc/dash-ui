import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';

export const BodyTitle = styled(Typography).attrs({
    variant:'h6',
})`
    margin:${props => props.theme.spacing(1)}px ${props => props.theme.spacing(2)}px 0;
    font-weight:700;
`

export const BodyText = styled(Typography).attrs({
    variant:'body1',
})`
    margin:${props => props.theme.spacing(1)}px ${props => props.theme.spacing(2)}px ${props => props.theme.spacing(2)}px;
    font-weight:400;
`

export const Caption = styled(Typography).attrs({
    variant:'body2',
})`
    margin:${props => props.theme.spacing(1)}px ${props => props.theme.spacing(2)}px ${props => props.theme.spacing(2)}px;
    font-weight:300;
`;


const Div = styled.div`
    display:flex;
    flex-wrap: wrap;
    @media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
    }
`
const StyledDiv = styled(Div)`
align-items: flex-start;
width: 100%;

`;

export const CircledAvatar = styled(Avatar)`
  width: 24px;
  height: 24px;
  margin:${props => props.theme.spacing(2)}px ${props => props.theme.spacing(1)}px  ${props => props.theme.spacing(1)}px ${props => props.theme.spacing(1)}px;
`;

const Line = styled.div`
width: 100vw;
height: 1px;
background: #DDDDDD;
@media screen and (min-width: ${props => props.theme.breakpoints.values.sm}px){
  marign:0
}
`;

export const Comment = (props)=>{
  const avatar = props.avatar;
  return(
    <>
    <StyledDiv>
      <div>
        <CircledAvatar src={avatar}/>
      </div>
      <ComentWrap>
        <UserName>ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名</UserName>
        <CommentArea>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </CommentArea>
        <div style={{display:'flex'}}><GrayText>2021.02.02 13:40</GrayText><GrayText>返信する</GrayText></div>
        <div>
          <Reply/>
          <Reply/>
          <Reply/>
        </div>
      </ComentWrap>
    </StyledDiv>
    <Line/>
    </>
  )
}
 
export const Reply = (props) =>{
  const avatar = props.avatar;
  return(
    <>
    <StyledDiv>
      <div>
        <CircledAvatar src={avatar}/>
      </div>
      <ReplyWrap>
        <ReplyUserName>ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名ユーザー名</ReplyUserName>
        <CommentArea>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </CommentArea>
        <div style={{display:'flex'}}><GrayText>2021.02.02 13:40</GrayText></div>
      </ReplyWrap>
    </StyledDiv>
    </>    
  )
}
const ComentWrap = styled.div`
 margin-top:${props => props.theme.spacing(2)}px;
 margin-bottom:${props => props.theme.spacing(2)}px;
 flex: 1;
`;

const ReplyWrap = styled(ComentWrap)`


`;

const UserName = styled(Typography)`
  font-size: 12px;
  height: 17px;
  color: #8F8F8F;
  margin-top: 2px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 300px;
  white-space: nowrap;
`;

const ReplyUserName = styled(UserName)`
width: 200px;
`;

const CommentArea = styled(Typography)`
font-size: 13px;
margin-top: ${props => props.theme.spacing(0.5)}px;
margin-right: ${props => props.theme.spacing(2)}px;
line-height: 152.9%
`;


const GrayText = styled(Typography)`
font-size: 12px;
color: #8F8F8F;
margin-top: 2px;
margin-right: ${props => props.theme.spacing(2)}px;
`;