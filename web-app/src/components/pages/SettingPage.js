import React from 'react';
import {Setting} from '../molecules/Setting'
import {PageTitle} from '../atoms/Title';
import {BasicTabs as Tabs} from '../molecules/Tabs'

const SettingPage = () => {
  return(
    <div>
        <PageTitle>設定</PageTitle>
        <Setting/>
    </div>
    );
}

export default SettingPage;
