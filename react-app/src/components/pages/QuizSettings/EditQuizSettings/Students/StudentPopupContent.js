import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { allStudents } from '../../../UsersPage/UsersTable';
import Checkbox from '@mui/material/Checkbox';

export default function StudentPopupContent() {
  const [checked, setChecked] = React.useState([1, 2, 3, 4]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };


  return (
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
      {
        allStudents?.map(student => (
          <>
            <ListItem alignItems="flex-start"
              key={student.bd_no}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(student.bd_no)}
                  checked={checked.indexOf(student.bd_no) !== -1}
                  inputProps={{ 'aria-labelledby': `checkbox-list-secondary-label-${student.bd_no}` }}
                />
              }
              disablePadding
            >
              <ListItemAvatar>
                <Avatar alt={student.first_name} src={student.img} />
              </ListItemAvatar>
              <ListItemText
                primary={`${student.first_name} ${student.second_name} (BD NO: ${student.bd_no} | SVC ID: ${student.svc_id})`}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Branch: {student.branch}, Unit: {student.unit} &nbsp;
                    </Typography>
                    - Email: {student.email}, Mobile: {student.mobile}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />

          </>
        ))
      }


    </List>
  );
}