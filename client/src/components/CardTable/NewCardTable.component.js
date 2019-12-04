import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import API from './../../utils/API';

import "../../../src/App.css";

const columns = [
  { id: 'clientName', label: 'Client Name', align: 'left', minWidth: 50 },
  { id: 'date', label: 'Date Created', align: 'left', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'orderRequest',
    label: 'Special Notes',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'pointOfContact',
    label: 'Contact Info',
    minWidth: 100,
    align: 'center',
  },
];


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const [inventory, setInventory] = useState([]);
  // const [submitState, setSubmitState] = useState(false);

  useEffect(()=>{
API.getInventory().then(data=>{
  setInventory(data.data)
  console.log(data.data)})
  },[])

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory ? inventory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            }): <></>}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[3, 10, 25, 100]}
        component="div"
        count={inventory.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}