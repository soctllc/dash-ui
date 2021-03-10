import React from 'react';
import { BasicChip } from '../atoms/Chip';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { CouponAvatar } from '../atoms/Avatar';

export const Coupon = () => {
  return(
  <>
  <StyledCard  variant="outlined">
   <StatusChip label={'使用中'} color='secondary'/>
   <Title>クーポンタイトル名</Title>
   <ExpireDate>2021年11月21日</ExpireDate>
   <CouponAvatar title={<ProviderName>クーポンタイトル名</ProviderName>}/>
  </StyledCard>
  </>)
}

const StyledCard = styled(Card)`
position:relative;
border-radius: 8px;
border: 1px solid #DDDDDD;
margin: ${props => props.theme.spacing(2)}px;
width: 343px;
height: 101px;
`;

const StatusChip = styled(BasicChip)`
position:absolute;
right: ${props => props.theme.spacing(2)}px;
top: ${props => props.theme.spacing(1)}px;
`;

const Title = styled(Typography)`
font-size: 13px;
font-weight: bold;
margin-top: ${props => props.theme.spacing(1.5)}px;
margin-left: ${props => props.theme.spacing(2)}px;
`;

const ExpireDate = styled(Typography)`
font-size: 12px;
margin-top: ${props => props.theme.spacing(0.6)}px;
margin-left: ${props => props.theme.spacing(2)}px;
color: #8F8F8F;
`;

const ProviderName = styled(Typography)`
font-size: 13px;
font-weight: bold;
`;