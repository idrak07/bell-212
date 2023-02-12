import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import * as React from "react";
import { stringAvatar } from "../../../../../util/string";

export default function StudentList({ students }) {
  console.log(students);
  return (
    <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}>
      {students?.map((student) => {
        return (
          <>
            <ListItem
              style={{
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <ListItemAvatar>
                  <Avatar
                    {...stringAvatar(
                      `${student?.firstName} ${student?.lastName}`
                    )}
                  />
                </ListItemAvatar>
                <p>{`${student?.firstName} ${student?.lastName} (BD NO: ${student?.bdNo})`}</p>
              </div>
              <p>Point: {student?.points}</p>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
}
