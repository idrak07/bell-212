import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../ui/CustomButton";

export default function DashboardCardItem({ subject, isQuiz=false }) {
  const goto = (h) => {
    window.location.href = h;
  };


  
  return (
    <Card
      style={{ height: "100%", display: "grid", alignContent: "space-between" }}
      sx={{ minWidth: 275 }}
    >
      <CardContent>
        <Typography marginBottom={3} variant="h5" component="div" style={{display: 'flex', alignItems:'center', gap: '12px'}}>
          <span style={{
            display: 'inline-block',
            fontSize: '20px',
            lineHeight: '40px',
            textAlign: 'center'
          }}>
            {subject?.iconComp ? subject.iconComp : (
              <i className={subject.icon}></i>
            )}
          </span>
          {subject.name}
        </Typography>

        <Typography variant="body2">{subject.description}</Typography>
      </CardContent>
      <CardActions style={{margin: '0 0 10px 10px'}}>
        {!isQuiz ? (
          <Link to={subject.link}>Learn More</Link>
        ) : (
          <CustomButton variant="primary" style={{padding: '6px 18px', fontSize: '16px'}}>
              <Link style={{color: 'white'}} to={subject.link}>See Quizzes</Link>
          </CustomButton>
        )}
      </CardActions>
    </Card>
  );
}
