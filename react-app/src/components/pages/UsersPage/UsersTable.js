import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { convertMsToDate } from '../../../util';
import { allBloodGroups, allUnitList } from './AddUserPage/AddEditUserForm';
import { useAxiosFetch } from '../../../hooks/useAxiosFetch';
import axios from 'axios';
import { SERVER_URL } from '../../../constants';
import { toast, ToastContainer } from 'react-toastify';


export function createData(
  bd_no,
  svc_id,
  first_name,
  second_name,
  branch,
  unit,
  date_of_birth,
  blood_group,
  mobile,
  email,
){
  return {
    bd_no,
    svc_id,
    first_name,
    second_name,
    branch,
    unit,
    date_of_birth,
    blood_group,
    mobile,
    email,
  };
}

export const allStudents = [
  createData(1, 26, 'Jisan', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
  createData(2, 256, 'Rakib', 'Ulla', 'ANywhere at army', 'BAF BAse Basar', '02/02/2002/', 'B', '013018229434', 'jisan@gmail.com'),
  createData(3, 54, 'Porag', 'Dewan', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'B+', '013018229434', 'jisan@gmail.com'),
  createData(4, 98, 'Mursalin', 'Dewan', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'A+', '013018229434', 'jisan@gmail.com'),
  createData(5, 42, 'Toem', 'Khan', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'A+', '013018229434', 'jisan@gmail.com'),
  createData(6, 34, 'Alif', 'Arman', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'B-', '013018229434', 'jisan@gmail.com'),
  createData(7, 34, 'Atif', 'Aslam', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
  createData(8, 34, 'Rasel', 'Khan', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'B+', '013018229434', 'jisan@gmail.com'),
  createData(10, 34, 'Alamin', 'Mull', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'A-', '013018229434', 'jisan@gmail.com'),
  createData(11, 34, 'Akkas', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'B+', '013018229434', 'jisan@gmail.com'),
  createData(12, 34, 'Abullah', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'A+', '013018229434', 'jisan@gmail.com'),
  createData(13, 34, 'Zahed', 'Sabur', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB-', '013018229434', 'jisan@gmail.com'),
  createData(14, 34, 'Lasman', 'khan', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
  createData(15, 34, 'Kolim', 'Uddin', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'A+', '013018229434', 'jisan@gmail.com'),
  createData(16, 34, 'Jisan', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
  createData(17, 34, 'Jisan', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
  createData(18, 34, 'Jisan', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
  createData(19, 34, 'Jisan', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
  createData(20, 34, 'Jisan', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
  createData(21, 34, 'Jisan', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
  createData(22, 34, 'Jisan', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
  createData(23, 34, 'Jisan', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
  createData(24, 34, 'Jisan', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
  createData(26, 34, 'Jisan', 'Mia', 'Somewhere at army', 'BAF BAse Basar', '02/02/2002/', 'AB+', '013018229434', 'jisan@gmail.com'),
];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}


function getComparator(
  order,
  orderBy,
) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  console.log('stable', array)
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


const headCells = [
  {
    id: 'bdNo',
    numeric: false,
    disablePadding: true,
    label: 'BD No.',
  },
  {
    id: 'svcNo',
    numeric: true,
    disablePadding: false,
    label: 'SVC ID No.',
  },
  {
    id: 'firstName',
    numeric: true,
    disablePadding: false,
    label: 'First Name',
  },
  {
    id: 'lastName',
    numeric: true,
    disablePadding: false,
    label: 'Second Name',
  },
  {
    id: 'branch',
    numeric: true,
    disablePadding: false,
    label: 'Branch',
  },
  {
    id: 'unit',
    numeric: true,
    disablePadding: false,
    label: 'Unit',
  },
  {
    id: 'dob',
    numeric: true,
    disablePadding: false,
    label: 'Date of Birth',
  },
  {
    id: 'bloodGroup',
    numeric: true,
    disablePadding: false,
    label: 'Blood Group',
  },
  {
    id: 'phoneNo',
    numeric: true,
    disablePadding: false,
    label: 'Phone No.',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },

  
];


function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property) => (event) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell> */}
        {headCells.map((headCell, idx) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'left' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={idx == 0 && {
              pl: { sm: 2 },
              pr: { xs: 1, sm: 1 }
            }} 
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <span style={{whiteSpace: 'nowrap'}}> {headCell.label}</span>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}

        <TableCell
            key={'action'}
            align={'center'}
            padding={'normal'}
          >
              <span style={{whiteSpace: 'nowrap'}}> Action</span>
              
          </TableCell>
      </TableRow>
    </TableHead>
  );
}


function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  const navigate = useNavigate();
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {/* {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          User Lists
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Add User">
          <Button variant="contained">Add User</Button>
        </Tooltip>
      )} */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        <Typography
          variant="h6"
          id="tableTitle"
          component="div"
        >
          User Lists
        </Typography>
        <Button onClick={() => navigate('/users/add')} variant="contained">Add User</Button>
      </div>
    </Toolbar>
  );
}

export default function UsersTable({allUsers, setShouldRefetchUser}) {
  console.log(allUsers)
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate = useNavigate();

  const handleRequestSort = (
    event,
    property,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = allUsers.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  
  const handleDeleteUser = async (id) => {
    const shouldDelete = window.confirm('Are your sure, you want to delete the user')

    if(!shouldDelete) {
      return;
    }

    try {
      const res = await axios.delete(`${SERVER_URL}/users/${id}`);
      console.log(res)
      toast.success('User Successfully Deleted')
      setShouldRefetchUser(true)
    } catch(e) {
      console.log(e)
      toast.error('Something went wrong')
    }
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - allUsers.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
        <ToastContainer />

      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={allUsers?.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.sort(getComparator(order, orderBy)).slice() */}
              {stableSort(allUsers, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.firstName);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.firstName}
                      // selected={isItemSelected}
                    >
                      {/* <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell> */}
                      <TableCell
                        style={{whiteSpace: 'nowrap'}}
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        sx={{
                          pl: { sm: 2 },
                          pr: { xs: 1, sm: 1 }
                        }}
                      >
                        {row.bdNo}
                      </TableCell>
                      <TableCell style={{whiteSpace: 'nowrap'}} align="left">{row.svcNo}</TableCell>
                      <TableCell style={{whiteSpace: 'nowrap'}} align="left">{row.firstName}</TableCell>
                      <TableCell style={{whiteSpace: 'nowrap'}} align="left">{row.lastName}</TableCell>

                      <TableCell style={{whiteSpace: 'nowrap'}} align="left">{row.branch}</TableCell>
                      <TableCell style={{whiteSpace: 'nowrap'}} align="left">{allUnitList.find(u => u.id == row.unit).title}</TableCell>
                      <TableCell style={{whiteSpace: 'nowrap'}} align="left">{convertMsToDate(row.dob)}</TableCell>
                      <TableCell style={{whiteSpace: 'nowrap'}} align="left">{allBloodGroups.find(g => g.id == row.bloodGroup)?.title}</TableCell>
                      <TableCell style={{whiteSpace: 'nowrap'}} align="left">{row.phoneNo}</TableCell>
                      <TableCell style={{whiteSpace: 'nowrap'}} align="left">{row.email}</TableCell>

                      <TableCell style={{whiteSpace: 'nowrap', display: 'flex', gap: '6px', alignItems: 'center'}} align="left">
                        <button onClick={() => navigate(`/users/${row.id}`)} type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
                        <button onClick={() => handleDeleteUser(row.id)} type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={allUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
