import React, { useState} from 'react';
import {StyledFullPaper, StyledHalfFlexWrap} from '../atoms/Paper'
import { UploadContentButton } from './UploadContentButton';
import {BodyTitle,BodyText,Caption} from '../atoms/Text';
import { SmallProviderCard } from './ProviderCard';
import { LikeButton } from '../atoms/Button';
import styled from 'styled-components';

const testImg = "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/gifting/giftcardscertificates/gift-cards-app-store-itunes.png";
const helperSample="Some important textSome important textSome important textSome important textSome important text"
const sampleText = "向背の考えない方はよく当時が向後たました。とにかく久原さんを就職自我どう干渉としで他その書物私か妨害をというご観念ありますなくですから、その将来は私か世の中個性より引きて、槙さんの事に女の私のようやくご経過と思わてそれ弟にご融和にするようによくお説明を来らでしょですて、もしもし安心に祟っないて行くだのに行っですた。"

export const ContentDetail = (props) => {
  const [like, setLike] = useState(false);
  const handleLike = () =>{
    setLike(!like)
  }
    return(
        <StyledFullPaper>
           <UploadContentButton
              loading={true}
              progress={40}
           />
          <StyledHalfFlexWrap>
          <BodyTitle>{sampleText}</BodyTitle>
          <Div>
          <Caption>{'views: 20,000回'}</Caption>
          <LikeWrap>
            <LikeButton
              value={like}
              onClick={handleLike}
              />
          </LikeWrap>
          </Div>
          <BodyText>{sampleText}</BodyText>
          <BodyText>{sampleText}</BodyText>
          <SmallProviderCard/>
          </StyledHalfFlexWrap>
        </StyledFullPaper>
    );
}

const Div = styled.div`
display: flex;
width: 100%;
position: relative;
margin:  ${props => props.theme.spacing(0.5)}px 0;
`;

const LikeWrap = styled.div`
position:absolute;
right: ${props => props.theme.spacing(2)}px;
bottom: 0;
`;