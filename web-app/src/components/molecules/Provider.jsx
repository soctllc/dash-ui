import React from 'react';
import {StyledFullPaper, StyledHalfFlexWrap} from '../atoms/Paper'
import {BodyText} from '../atoms/Text';
import { ProviderCard } from '../molecules/ProviderCard';
import { ContentCardList } from '../molecules/ContentCardList';
import {BasicTabs as Tabs} from '../molecules/Tabs';
import { ProviderList } from './ProviderList';
import { LikeList } from './LikeList'

const sampleText = "向背の考えない方はよく当時が向後たました。とにかく久原さんを就職自我どう干渉としで他その書物私か妨害をというご観念ありますなくですから、その将来は私か世の中個性より引きて、槙さんの事に女の私のようやくご経過と思わてそれ弟にご融和にするようによくお説明を来らでしょですて、もしもし安心に祟っないて行くだのに行っですた。"

export const Provider = (props) => {
  const contents = [
    {
      label:"Premium",
      content: <ContentCardList/>
    },
    {
      label:"Follow",
      content: <ProviderList/>
    },
    {
      label:"Like",
      content: <LikeList/>
    },

  ]

    return(
        <StyledFullPaper>
          <StyledHalfFlexWrap>
          <ProviderCard/>
          <BodyText>{sampleText}</BodyText>
          </StyledHalfFlexWrap>
          <Tabs
          contents={contents}/>
        </StyledFullPaper>
    );
}
