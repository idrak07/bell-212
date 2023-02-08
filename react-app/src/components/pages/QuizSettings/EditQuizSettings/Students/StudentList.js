import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { stringAvatar } from "../../../../../util/string";

export default function StudentList({ students }) {
  return (
    <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}>
      {students?.map((currentStudent) => {
        const student = currentStudent.user;
        return (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  {...stringAvatar(`${student.firstName} ${student.lastName}`)}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${student.firstName} ${student.secondName} (BD NO: ${student.bdNo} | SVC ID: ${student.svcNo})`}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Branch: {student.branch}, Unit: {student.unit} &nbsp;
                    </Typography>
                    - Email: {student.email}, Mobile: {student.phoneNo}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
}
