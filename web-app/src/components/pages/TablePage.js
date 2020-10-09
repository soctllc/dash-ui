import React,{useState} from 'react';
import {FixedTable as Table,HeadlessTable} from '../molecules/Table'
import {columns,rows,viewData} from '../../demo/tableData'
import {PageTitle} from '../atoms/Title';
import {filterObjects} from '../../utils/filterObjects'

const dummyFilters = [
  {id:'name',values:['India','Japan']},
  {id:'name',values:['India','Japan']}
];

const TablePage = () => {
  const [filters, setFilters] = useState(dummyFilters);
  return(
    <div>
      <PageTitle>テーブル</PageTitle>
      <Table columns={columns} rows={filterObjects(rows,filters)}/>
      <HeadlessTable rows={viewData}/>
    </div>
  )
};

export default TablePage;
