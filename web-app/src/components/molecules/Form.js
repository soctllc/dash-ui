import React from 'react';
import {FullPaper} from '../atoms/Paper'
import {SingleTextInput,MultiLineTextInput} from '../atoms/TextInput'
import {SelectInput}from '../atoms/SelectInput'
import {DatePicker}from '../atoms/DatePicker'


export const Form = (props) => {
    return(
        <FullPaper>
            <SingleTextInput
                title="代表者氏名"
                label="氏名を入力してください"
                required={true}
            />
            <SingleTextInput
                title="ニックネーム"
                label="ニックネームを入力してください"
            /> 
            <MultiLineTextInput
                title="自己紹介"
                label="自己紹介を入力してください"
            />
            <SelectInput
                title="年齢"
                required={true}
                items={props.items}
            />
            <DatePicker
                title="生年月日"
                required={true}
            />
        </FullPaper>
    );
}
