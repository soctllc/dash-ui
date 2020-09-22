import React from 'react';
import {PageTitle} from '../atoms/Title';
import {SimpleAreaChart} from '../atoms/Chart'

const DataPage = () => {
  return(
    <div>
        <PageTitle>データ</PageTitle>
        <SimpleAreaChart/>
    </div>
    );
}

export default DataPage;
