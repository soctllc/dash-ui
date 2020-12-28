import React,{useState} from 'react';
import {StyledFlexWrap} from '../atoms/Paper';
import { ContentCard, AddContentCard } from './ContentCard';

export const ContentCardList = (props) =>{
  return(
    <StyledFlexWrap>
      <AddContentCard/>
      <ContentCard/>
      <ContentCard/>
      <ContentCard/>
      <ContentCard/>
      <ContentCard/>
      <ContentCard/>
    </StyledFlexWrap>
  )
}
