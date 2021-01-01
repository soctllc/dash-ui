import React from 'react';
import {PageTitle} from '../atoms/Title';
import { ContentDetail } from '../molecules/ContentDetail';

const CustomerContentDetailPage = () => {
  return(
    <div>
        <PageTitle>コンテンツ詳細</PageTitle>
        <ContentDetail/>
    </div>
    );
}

export default CustomerContentDetailPage;