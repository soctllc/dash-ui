import React,{useState} from 'react';
import {PageTitle} from '../atoms/Title';
import {UserCard} from '../molecules/Card'
import {FlexWrap} from '../atoms/Paper';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {Modal} from '../molecules/Modal'

const dammy_1 = [
    {icon:<FacebookIcon/>,href:"https://google.co.jp"},
    {icon:<TwitterIcon/>,href:"https://google.co.jp"}
]

const dammy_2 = [
    {icon:<FacebookIcon/>,href:"https://google.co.jp"},
    {icon:<YouTubeIcon/>,href:"https://google.co.jp"}
]
const CardPage = () => {
    const [open,setOpen] = useState(false);
    const modalTitle = "タイトルは任意"
  return(
    <div>
        {open?<Modal title={modalTitle} onClose={()=> setOpen(false)}><UserCard/></Modal>:null}
        <PageTitle>データ</PageTitle>
        <FlexWrap>
            <UserCard
                name="モーダルテスト"
                caption="ボタンをタップしてモーダルを開く"
                icons={dammy_1}
                onClick={()=> setOpen(!open)}
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
