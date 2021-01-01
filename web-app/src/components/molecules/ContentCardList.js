import React,{useState} from 'react';
import {StyledFlexWrap} from '../atoms/Paper';
import { ContentCard, AddContentCard, FlatContentCard } from './ContentCard';

export const ContentCardList = (props) =>{
  return(
    <StyledFlexWrap>
      <AddContentCard/>
      <ContentCard/>
      <ContentCard/>
      <FlatContentCard/>
      <FlatContentCard/>
      <ContentCard/>
      <ContentCard/>
    </StyledFlexWrap>
  )
}
