import React from 'react';
import {FullPaper} from '../atoms/Paper';
import {PageTitle} from '../atoms/Title';
import {BasicTabs as Tabs} from '../molecules/Tabs';
import { MyMenuAvatar } from '../atoms/Avatar';

const MyMenuPage = () => {
  const contents = [
    {
      label:"タブ１",
      content: <div>タブ１</div>
    },
    {
      label:"タブ2",
      content:<div>タブ２</div>
    }
  ]
  return(
    <div>
        <PageTitle>マイメニュー</PageTitle>
        <FullPaper>
        <MyMenuAvatar
          title={'プロバイダー'}
          subtitle1={'サブタイトル1'}
          subtitle2={'サブタイトル2'}
        />
        <Tabs   
          contents={contents}/>
        </FullPaper>
    </div>
    );
}

export default MyMenuPage;
