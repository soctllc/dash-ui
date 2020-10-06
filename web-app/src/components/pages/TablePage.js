import React,{useState} from 'react';
import {FixedTable as Table} from '../molecules/Table'
import {columns,rows} from '../../demo/tableData'
import {PageTitle} from '../atoms/Title';
import {filterObjects} from '../../utils/filterObjects'

const filters = [
  {id:'name',values:['India','Japan']},
  {id:'name',values:['India','Japan']}
];

const TablePage = () => {
  const [page, setPage] = useState(0);
  return(
    <div>
      <PageTitle>テーブル</PageTitle>
      <Table columns={columns} rows={filterObjects(rows,filters)}/>
    </div>
  )
};

export default TablePage;
