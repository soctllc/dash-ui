import React,{useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {FullPaper} from '../atoms/Paper'
import styled from "styled-components"
import TableSortLabel from '@material-ui/core/TableSortLabel';
import {sortObjects} from '../../utils/sortObjects';

export const FixedTable = (props) => {
  const columns = props.columns;
  const rows = props.rows ? props.rows :[];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy,setOrderBy] = useState('');
  const [order,setOrder] = useState('asc');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  const handleSort = (id) => {
    const newOrder = order === 'asc' ? 'desc' : 'asc';
    setOrderBy(id);
    setOrder(newOrder);
    sortObjects(rows,id,newOrder);
  }
  return(
    <FullPaper>
      <Container>
      <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth }}
            >
              <TableSortLabel
                active={orderBy === column.id}
                direction={orderBy === column.id ? order : 'asc'}
                onClick={() => handleSort(column.id)}
              >{column.label}</TableSortLabel>
              
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
        <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
      </Table>
      </Container>
      <TablePagination
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage="表示件数"
      />
    </FullPaper>
  );
}

const Container = styled(TableContainer)`
  max-height:${props => props.theme.tableHeight};
`;
