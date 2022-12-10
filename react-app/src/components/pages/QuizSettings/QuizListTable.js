import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@material-ui/core';
import { useNavigate } from 'react-router';

function createData(id, name, start_time, end_time, students, questions) {
  return { id, name, start_time, end_time, students, questions };
}

const rows = [
  createData(1,'The big quiz it is going ', '2022/12/10 10:00:00', '2022/12/10 12:00:00', 24, 4),
  createData(2,'Ice cream sandwich', '2022/12/10 10:00:00', '2022/12/10 11:00:00', 37, 4),
  createData(3, 'Eclair', '2022/12/10 10:00:00', '2022/12/10 12:00:00', 24, 6),
  createData(4, 'Cupcake', '2022/12/10 10:00:00', '2022/12/10 12:00:00', 67, 4),
  createData(5,'Gingerbread', '2022/12/10 10:00:00', '2022/12/10 12:00:00', 49, 3),
];

export default function QuizListTable() {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Start Time</TableCell>
            <TableCell align="left">End Time</TableCell>
            {/* <TableCell align="left">Students</TableCell>
            <TableCell align="left">Questions</TableCell> */}

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">
              <Typography 
                  variant="h6"
                  id="tableTitle"
                  style={{
                    fontSize: '15px',
                    fontWeight: '400'
                  }}
                  component="div"
                >
                    {row.name}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography 
                  variant="h6"
                  id="tableTitle"
                  style={{
                    fontSize: '15px'
                  }}
                  component="div"
                >
                    {row.start_time.split(' ')[0]}
                </Typography>
                <Typography 
                  variant="h6"
                  id="tableTitle"
                  style={{
                    fontSize: '14px',
                    fontWeight: '400'
                  }}
                  component="div"
                >
                  {row.start_time.split(' ')[1]}
                </Typography>
              </TableCell>
              <TableCell align="left">
              <Typography 
                  variant="h6"
                  id="tableTitle"
                  style={{
                    fontSize: '15px'
                  }}
                  component="div"
                >
                    {row.end_time.split(' ')[0]}
                </Typography>
                <Typography 
                  variant="h6"
                  id="tableTitle"
                  style={{
                    fontSize: '14px',
                    fontWeight: '400'
                  }}
                  component="div"
                >
                  {row.end_time.split(' ')[1]}
                </Typography>
              </TableCell>
              {/* <TableCell align="left">{row.students}</TableCell>
              <TableCell align="left">{row.questions}</TableCell> */}

              <TableCell style={{whiteSpace: 'nowrap', textAlign: 'center'}} align="left">
                <button style={{marginRight: '6px'}} onClick={() => navigate(`/quiz-settings/${row.id}`)} type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}