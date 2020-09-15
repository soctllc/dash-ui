import React from 'react';
import {FixedTable as Table} from '../molecules/Table'
import {columns,rows} from '../../demo/tableData'

const TablePage = () => {
  return(
    <div>
      <Table columns={columns} rows={rows}/>
    </div>
  )
};

export default TablePage;
