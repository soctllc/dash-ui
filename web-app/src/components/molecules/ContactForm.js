import React,{useState} from 'react';
import {StyledFullPaper} from '../atoms/Paper'
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
import {ErrorAlert} from '../atoms/Alert'
import {SubTitle} from '../atoms/Title'

const testImg = "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/gifting/giftcardscertificates/gift-cards-app-store-itunes.png";
const helperSample="Some important textSome important textSome important textSome important textSome important text"

export const ContactForm = (props) => {
    const [name,setName] = useState('ねーむ');
    const [date,setDate] = useState('2020/9/1');
    const [age,setAge] = useState(10);
    const [method,setMethod] = useState('自動');
    const [src,setSrc] = useState('');
    const [checks,setChecks] = useState(checkData);
    const [disabled,setDisabled] = useState(false);
    const [loading,setLoading] = useState(false);

    return(
        <StyledFullPaper>
            <SingleTextInput
                title="お名前"
                label="氏名を入力してください"
                required={true}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                helperText={helperSample}/>
             <SingleTextInput
                title="メールアドレス"
                label="メールアドレスを入力してください"
                required={true}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                helperText={helperSample}/>
             <SingleTextInput
                title="教室名"
                label="教室名を入力してください"
                required={true}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                helperText={helperSample}/>
             <DatePicker
                title="生年月日"
                required={true}
                onChange={(date)=>{setDate(date)}}
                value={date}
              />
            <MultiLineTextInput
                title="お問い合わせ内容"
                label="お問い合わせ内容を入力してください"
                onChange={props.onChange}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />
        </StyledFullPaper>
    );
}
