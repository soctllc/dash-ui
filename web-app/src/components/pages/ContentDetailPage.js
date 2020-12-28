import React from 'react';
import {StyledFullPaper} from '../atoms/Paper';
import {PageTitle} from '../atoms/Title';
import {BasicTabs as Tabs} from '../molecules/Tabs';
import { EditContent } from '../molecules/EditContent';

const ContentDetailPage = () => {
  return(
    <div>
        <PageTitle>コンテンツ詳細</PageTitle>
        <EditContent/>
    </div>
    );
}

export default ContentDetailPage;