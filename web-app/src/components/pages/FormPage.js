import React from 'react';
import {Form} from '../molecules/Form'
import {PageTitle} from '../atoms/Title';
import {BasicTabs as Tabs} from '../molecules/Tabs'

const FormPage = () => {
  const contents = [
    {
      label:"タブ１",
      content:<Form/>
    },
    {
      label:"タブ2",
      content:<PageTitle>テスト</PageTitle>
    }
  ]
  return(
    <div>
        <PageTitle>フォーム</PageTitle>
        <Tabs
          contents={contents}
        />
    </div>
    );
}

export default FormPage;
