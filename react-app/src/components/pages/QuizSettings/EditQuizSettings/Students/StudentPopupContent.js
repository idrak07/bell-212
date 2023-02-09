import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { SERVER_URL } from "../../../../../constants";
import useFetch from "../../../../../hooks/useFetch";
import { stringAvatar } from "../../../../../util/string";

export default function StudentPopupContent({ quiz, allUsers, setAllUsers }) {
  const [checked, setChecked] = React.useState(allUsers?.map((u) => u?.userId));

  // api call
  const [{ response, error, isLoading }, doFetch] = useFetch(
    `${SERVER_URL}/users`
  );

  React.useEffect(() => {
    doFetch({
      method: "GET",
    });
    console.log({ response });
  }, []);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setAllUsers(newChecked)
  };

  // React.useEffect(() => {
  //   if (response) {
  //     const updatedAllUsers = response.filter(
  //       (user) => checked.indexOf(user.id) !== -1
  //     );
  //     const usersWithQuizInfo = updatedAllUsers.map((user) => {
  //       return {
  //         ...user,
  //         quiz: quiz.id,
  //         points: null,
  //       };
  //     });
  //     setAllUsers(updatedAllUsers);
  //   }
  // }, [checked]);

  return (
    <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}>
      {isLoading
        ? "Getting users"
        : error
        ? "Error getting users"
        : response &&
          !!response?.length &&
          response
            ?.filter((u) => u.authority !== "ROLE_ADMIN")
            ?.map((student) => (
              <>
                <ListItem
                  alignItems="flex-start"
                  key={student.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(student.id)}
                      checked={checked.indexOf(student.id) !== -1}
                      inputProps={{
                        "aria-labelledby": `checkbox-list-secondary-label-${student.id}`,
                      }}
                    />
                  }
                  disablePadding
                >
                  <ListItemAvatar>
                    <Avatar
                      {...stringAvatar(
                        `${student.firstName} ${student.lastName}`
                      )}
                    />
                    <div className="avatar"></div>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${student.firstName} ${student.lastName} (BD NO: ${student?.bdNo} | SVC ID: ${student?.svcNo})`}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Branch: {student?.branch}, Unit: {student?.unit} &nbsp;
                        </Typography>
                        - Email: {student?.email}, Mobile: {student?.phoneNo}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            ))}
    </List>
  );
}
