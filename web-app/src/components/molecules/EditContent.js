import React,{useState} from 'react';
import {StyledFullPaper} from '../atoms/Paper'
import {SingleTextInput,MultiLineTextInput} from '../atoms/TextInput'
import {publishOption, priceOption} from '../../demo/checkData'
import {EditableThumbnail} from  '../atoms/Avatar';
import { SimpleSwitch } from '../atoms/Switch';
import { UploadContentButton } from './UploadContentButton';
import { UploadDottedButton, DeleteContentButton } from '../atoms/Button';

const testImg = "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/gifting/giftcardscertificates/gift-cards-app-store-itunes.png";
const helperSample="Some important textSome important textSome important textSome important textSome important text"

export const EditContent = (props) => {
    const [name,setName] = useState('ねーむ');
    const [date,setDate] = useState('2020/9/1');
    const [age,setAge] = useState(10);
    const [method,setMethod] = useState('自動');
    const [src,setSrc] = useState('');
    const [checked ,setChecked] = useState(false);
    const [disabled,setDisabled] = useState(false);
    const [loading,setLoading] = useState(false);
    const onCheck = (data) => {
      console.log(data)
      setChecked(data);
    };

    return(
        <StyledFullPaper>
           <UploadContentButton
              loading={true}
              progress={40}
           />
           <EditableThumbnail
                title="サムネイル"
                loading={loading}
                onClick={()=>{setLoading(!loading)}}
            />
          <SimpleSwitch
            title='公開状態'
            array={publishOption}
            checked={checked}
            onChange={(e)=>onCheck(e.target.checked)}
            />
            <SingleTextInput
                title="タイトル"
                label="タイトルを入力してください"
                required={true}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                helperText={helperSample}/>
            <MultiLineTextInput
                title="動画説明"
                label="動画説明を入力してください"
                onChange={props.onChange}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />
             <SingleTextInput
                title="メールアドレス"
                label="メールアドレスを入力してください"
                required={true}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                helperText={helperSample}/>
             <SingleTextInput
                title="販売価格（バックナンバー）"
                label="販売価格を入力してください"
                required={true}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                helperText={helperSample}/>
            <SimpleSwitch
             title='動画の無料公開'
             array={priceOption}
             checked={checked}
             onChange={(e)=>onCheck(e.target.checked)}
             />
              <MultiLineTextInput
                title="追加説明"
                label="追加説明を入力してください"
                onChange={props.onChange}
                value={name}
                complement={'購入者限定'}
                onChange={(e)=>{setName(e.target.value)}}
            />
            <UploadDottedButton
             title={'購入限定資料'}
             >{'資料をアップロードしてください'}</UploadDottedButton>
            <DeleteContentButton
             title={'購入限定資料'}
            />
             <MultiLineTextInput
                title="購入特典資料説明"
                label="購入特典資料説明を入力してください"
                onChange={props.onChange}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />
        </StyledFullPaper>
    );
}
