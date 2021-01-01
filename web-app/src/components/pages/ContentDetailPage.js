import React from 'react';
import {PageTitle} from '../atoms/Title';
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