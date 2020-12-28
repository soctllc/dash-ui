import React from 'react';
import {StyledFullPaper} from '../atoms/Paper';
import {PageTitle} from '../atoms/Title';
import {BasicTabs as Tabs} from '../molecules/Tabs';
import { MyMenuAvatar } from '../atoms/Avatar';
import { ContentCard } from '../molecules/ContentCard';
import { ContentCardList } from '../molecules/ContentCardList';

const MyMenuPage = () => {
  const contents = [
    {
      label:"タブ１",
      content: <ContentCardList/>
    },
    {
      label:"タブ2",
      content: <ContentCardList/>
    }
  ]
  return(
    <div>
        <PageTitle>マイメニュー</PageTitle>
        <StyledFullPaper>
        <MyMenuAvatar
          title={'プロバイダー'}
          subtitle1={'サブタイトル1'}
          subtitle2={'サブタイトル2'}
        />
        <Tabs
          contents={contents}/>
        </StyledFullPaper>
    </div>
    );
}

export default MyMenuPage;
