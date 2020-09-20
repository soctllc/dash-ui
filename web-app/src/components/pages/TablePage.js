import React from 'react';
import {FixedTable as Table} from '../molecules/Table'
import {columns,rows} from '../../demo/tableData'
import {PageTitle} from '../atoms/Title';

const TablePage = () => {
  return(
    <div>
      <PageTitle>テーブル</PageTitle>
      <Table columns={columns} rows={rows}/>
    </div>
  )
};

export default TablePage;
