import React,{useState} from 'react';
import {FullPaper} from '../atoms/Paper'
import {SingleTextInput,MultiLineTextInput} from '../atoms/TextInput'
import {SelectInput}from '../atoms/SelectInput'
import {DatePicker}from '../atoms/DatePicker'
import {RadioInput,RadioImages}from '../atoms/RadioInput'
import {items,methods,images} from '../../demo/selectData'
import {checkData} from '../../demo/checkData'
import {CheckInput}from '../atoms/CheckInput';
import {BasicButton,UploadButton} from '../atoms/Button';
import {EditableAvatar} from  '../atoms/Avatar';
import {Img} from '../atoms/Img';

const testImg = "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/gifting/giftcardscertificates/gift-cards-app-store-itunes.png";

export const Form = (props) => {
    const [name,setName] = useState('ねーむ');
    const [date,setDate] = useState('2020/9/1');
    const [age,setAge] = useState(10);
    const [method,setMethod] = useState('自動');
    const [src,setSrc] = useState('');
    const [checks,setChecks] = useState(checkData);
    const [disabled,setDisabled] = useState(false);
    const [loading,setLoading] = useState(false);

    const handleCheck = (index) => {
        const checkedItem = checks[index];
        const newChecks = checks.slice();
        checkedItem.checked = !checkedItem.checked;
        newChecks[index] = checkedItem;
        setChecks(newChecks);
    }

    return(
        <FullPaper>
            <EditableAvatar
                title="プロフィール写真"
                loading={loading}
                onClick={()=>{setLoading(!loading)}}
                
            />
            <SingleTextInput
                title="代表者氏名"
                label="氏名を入力してください"
                required={true}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                helperText="Some important textSome important textSome important textSome important textSome important text"
            />
            <SingleTextInput
                title="ニックネーム"
                label="ニックネームを入力してください"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            /> 
            <MultiLineTextInput
                title="自己紹介"
                label="自己紹介を入力してください"
                onChange={props.onChange}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />
            <SelectInput
                title="年齢"
                required={true}
                items={items}
                onChange={(e)=>{setAge(e.target.value)}}
                value={age}
            />
            <DatePicker
                title="生年月日"
                required={true}
                onChange={(date)=>{setDate(date)}}
                value={date}
            />
             <RadioInput
                title="決済方式"
                label="決済方式"
                items={methods}
                onChange={(e)=>{setMethod(e.target.value)}}
                value={method}
            />
            <RadioImages
                title="画像選択"
                label="画像を選択してください"
                items={images}
                onChange={(e)=>{setSrc(e.target.value)}}
                value={src}
            />
            <CheckInput
                title="利用規約"
                label="規約に同意する"
                items={checks}
                onChange={(index) => {handleCheck(index)}}
            />
            <UploadButton
                title="本人確認書類" 
                disabled={disabled} onClick={() => setDisabled(!disabled)}>
                資料をアップロードしてください
            </UploadButton>
           
            <BasicButton disabled={disabled} onClick={() => setDisabled(!disabled)}>
                確定する
            </BasicButton><br/>
            <Img src={testImg} />
        </FullPaper>
    );
}
