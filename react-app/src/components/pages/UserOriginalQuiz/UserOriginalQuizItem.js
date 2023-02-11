import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography
} from "@material-ui/core";
import { Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { arrayToDate, formatDate } from "../../../util";

const UserOriginalQuizItem = ({ quiz }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Stack direction="row" spacing={1}>
              <Chip size="small" label={quiz.topic} color="default" />
              <Chip size="small" label={quiz.status} color="default" />
            </Stack>
            <Typography color="text.secondary" gutterBottom></Typography>
            <Typography variant="h5" component="div">
              {quiz.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Typography variant="body2">
              Start Time: {formatDate(arrayToDate(quiz?.startTime))}
              <br />
              End Time: {formatDate(arrayToDate(quiz?.endTime))}
            </Typography>
          </CardContent>
          <CardActions style={{ margin: "0 0 10px 10px" }}>
            {!quiz?.attended ? (
              <Button
                onClick={() => {
                  navigate(`/quiz/${quiz.id}`);
                }}
                size="small"
                variant="outlined"
                style={{ background: "#4E66B0" }}
              >
                <span
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <i
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "14px",
                      color: "#fff",
                    }}
                    class="bi bi-rocket-takeoff"
                  ></i>
                  <span style={{ color: "#fff" }}>Start</span>
                </span>
              </Button>
            ) : (
              <Chip
                color="success"
                label="Completed"
                size="small"
                style={{ background: "#ED6C02", color: "#fff" }}
              />
            )}
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default UserOriginalQuizItem;
