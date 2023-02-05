

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./Table.css"



function createData( name, email, amount, status, date, icon ) {
  return { name, email, amount, status, date, icon };
}

const rows = [
  createData('User', "user@example.com", `$345`, "Paid At Today at 10:13AM", "Today at 10:13 AM",  <VisibilityIcon/> ),
  createData('User', "user@example.com", `$345`, "Created At Today at 10:13AM", "Today at 10:13 AM", <VisibilityIcon/>),
 
];

export default function BasicTable() {
  return (
    <div className='Table'>
             <h3>Recent orders</h3>
            
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            {/* <TableCell align="left">name</TableCell>
            <TableCell align="left">email</TableCell>
            <TableCell align="left">amount</TableCell>
            <TableCell align="left">status</TableCell>
            <TableCell align="left">date</TableCell> */}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.icon}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}




// export default Table