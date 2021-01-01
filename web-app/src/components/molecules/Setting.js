import React,{useState} from 'react';
import {FullPaper} from '../atoms/Paper'
import {SingleTextInput,MultiLineTextInput,SingleTextRegistration} from '../atoms/TextInput'
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
import {EditableThumbnail} from  '../atoms/Avatar';
import { UploadRegistrationButton } from '../atoms/Button';
import { useHistory } from 'react-router-dom';

const testImg = "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/gifting/giftcardscertificates/gift-cards-app-store-itunes.png";
const helperSample="Some important textSome important textSome important textSome important textSome important text"

export const Setting = (props) => {
    const [name,setName] = useState('ねーむ');
    const [date,setDate] = useState('2020/9/1');
    const [age,setAge] = useState(10);
    const [method,setMethod] = useState('自動');
    const [src,setSrc] = useState('');
    const [checks,setChecks] = useState(checkData);
    const [disabled,setDisabled] = useState(false);
    const [loading,setLoading] = useState(false);
    const history = useHistory();

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
                title="プロフィール写真を変更"
                loading={loading}
                onClick={() => { setLoading(!loading) }}
                required={true}
            />
            <SubTitle text={'公開情報'} />
<<<<<<< HEAD
            <SingleTextRegistration
                title="本人確認"
                placeholder="本人確認を行ってください"
                //value={name}
                required={true}
                //onChange={(e)=>{setName(e.target.value)}}
=======
            <UploadRegistrationButton
                title={'本人確認'}
                onClick={() => history.push('/myMenu')}
            >
                {'本人確認を行ってください'}
            </UploadRegistrationButton>
            <SingleTextInput
                title="ニックネーム"
                label="ニックネームを入力してください"
                status={'done'}
                value={name}
                onChange={(e) => { setName(e.target.value)}}
>>>>>>> aee513df486131daac9e7601b9a4e7b78ade2ee7
            />
            <SingleTextInput
                title="ニックネーム"
                label="ニックネームを入力してください"
                status={'error'}
                value={name}
                onChange={(e) => { setName(e.target.value)}}
            />
            <SingleTextInput
                title="ニックネーム"
                label="ニックネームを入力してください"
                status={'cancel'}
                value={name}
                onChange={(e) => { setName(e.target.value)}}
            />
            <MultiLineTextInput
                title="自己紹介"
                label="自己紹介を入力してください"
                onChange={props.onChange}
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />
        </FullPaper>
    );
}
