import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate, useParams } from "react-router";

export default function QuizListItemByTopic({quiz}) {
  const navigate = useNavigate();
  const params = useParams();
  const {topic} = params;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
                {quiz.status}
            </Typography>
            <Typography variant="h5" component="div">
              {quiz.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            </Typography>
            <Typography variant="body2">
              Start Time: {quiz?.startTime.join(' ')} 
              <br />
              End Time: {quiz?.endTime.join(' ')} 
            </Typography>
          </CardContent>
          <CardActions style={{margin: '0 0 10px 10px'}}>
            <Button onClick={() => navigate(`/quiz-settings/${topic}/${quiz.id}`)} size="small" variant="outlined">Edit Quiz</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
