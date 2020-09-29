import React from 'react';
import {PageTitle} from '../atoms/Title';
import {UserCard} from '../molecules/Card'
import {FlexWrap} from '../atoms/Paper';

const CardPage = () => {
  return(
    <div>
        <PageTitle>データ</PageTitle>
        <FlexWrap>
            <UserCard
                name="テスト太郎"
                caption="テスト太郎のCaptionテスト"
            />
            <UserCard
                name="テスト太郎"
                caption="テスト太郎のCaptionテスト"
            />
            <UserCard
                name="テスト太郎"
                caption="テスト太郎のCaptionテスト"
            />
        </FlexWrap>
    </div>
    );
}

export default CardPage;
