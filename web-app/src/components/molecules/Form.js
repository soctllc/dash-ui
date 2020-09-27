import React,{useState} from 'react';
import {FullPaper} from '../atoms/Paper'
import {SingleTextInput,MultiLineTextInput} from '../atoms/TextInput'
import {SelectInput}from '../atoms/SelectInput'
import {DatePicker}from '../atoms/DatePicker'
import {RadioInput}from '../atoms/RadioInput'
import {items,methods} from '../../demo/selectData'
import {checkData} from '../../demo/checkData'
import {CheckInput}from '../atoms/CheckInput';
import {BasicButton,UploadButton} from '../atoms/Button';

export const Form = (props) => {
    const [name,setName] = useState('ねーむ');
    const [date,setDate] = useState('2020/9/1');
    const [age,setAge] = useState(10);
    const [method,setMethod] = useState('自動');
    const [checks,setChecks] = useState(checkData);
    const [disabled,setDisabled] = useState(false);

    const handleCheck = (index) => {
        const checkedItem = checks[index];
        const newChecks = checks.slice();
        checkedItem.checked = !checkedItem.checked;
        newChecks[index] = checkedItem;
        setChecks(newChecks);
    }

    return(
        <FullPaper>
            <SingleTextInput
                title="代表者氏名"
                label="氏名を入力してください"
                required={true}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
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
        </FullPaper>
    );
}
