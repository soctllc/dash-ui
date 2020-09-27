import React from 'react';
import {FullPaper,HalfPaper} from '../atoms/Paper'
import {PageTitle} from '../atoms/Title';
import {BodyTitle,BodyText,Caption} from '../atoms/Text'
import {body,jpBody} from '../../demo/textData';

const TopPage = () => {
  return(
    <div>
      <PageTitle>ダッシュボード</PageTitle>
      <FullPaper>
        <BodyTitle>
          Body Title
        </BodyTitle>
        <BodyText>
          {body}<br/>{body}
        </BodyText>
        <Caption>
        {body}<br/>{body}
        </Caption>
      </FullPaper>
      <HalfPaper>
      <BodyTitle>
          ボディータイトル
        </BodyTitle>
        <BodyText>
          {jpBody}<br/>{jpBody}
        </BodyText>
        <Caption>
        {jpBody}<br/>{jpBody}
        </Caption>
      </HalfPaper>
     
    </div>
  )
};

export default TopPage;
