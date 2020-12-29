import React from 'react';
import {PageTitle} from '../atoms/Title';
import {SimpleAreaChart} from '../atoms/Chart'
import SalesCards from '../organisms/SalesCards';

const DataPage = () => {
  return(
    <div>
        <PageTitle>データ</PageTitle>
        <SalesCards />
        <SimpleAreaChart/>
    </div>
    );
}

export default DataPage;
