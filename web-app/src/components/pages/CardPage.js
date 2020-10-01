import React from 'react';
import {PageTitle} from '../atoms/Title';
import {UserCard} from '../molecules/Card'
import {FlexWrap} from '../atoms/Paper';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const dammy_1 = [
    {icon:<FacebookIcon/>,href:"https://google.co.jp"},
    {icon:<TwitterIcon/>,href:"https://google.co.jp"}
]

const dammy_2 = [
    {icon:<FacebookIcon/>,href:"https://google.co.jp"},
    {icon:<YouTubeIcon/>,href:"https://google.co.jp"}
]
const CardPage = () => {
  return(
    <div>
        <PageTitle>データ</PageTitle>
        <FlexWrap>
            <UserCard
                name="テスト太郎"
                caption="テスト太郎のCaptionテスト"
                icons={dammy_1}
            />
            <UserCard
                name="テスト太郎"
                caption="テスト太郎のCaptionテスト"
                icons={dammy_2}
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
