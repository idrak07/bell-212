import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate, useParams } from "react-router";
import { arrayToDate, formatDate } from "../../../../util";

export default function QuizListItemByTopic({ quiz }) {
  const navigate = useNavigate();
  const params = useParams();
  const { topic } = params;

  return (
    <Card
      variant="outlined"
      sx={{ minWidth: 275 }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {quiz.status}
          </Typography>
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
          <Button
            onClick={() => navigate(`/quiz-settings/${topic}/${quiz.id}`)}
            size="small"
            variant="outlined"
          >
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <i
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "14px",
                }}
                class="bi bi-eye"
              ></i>
              <span>View</span>
            </span>
          </Button>
        </CardActions>
      </React.Fragment>
    </Card>
  );
}
