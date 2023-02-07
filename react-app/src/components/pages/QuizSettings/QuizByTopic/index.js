import { Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import CustomButton from "../../../../ui/CustomButton";
import AdminLayout from "../../../layouts/AdminLayout";
import QuizListByTopic from "./QuizListByTopic";

const QuizByTopic = () => {
  const navigate = useNavigate();

  const params = useParams();

  return (
    <AdminLayout>
      <div
        style={{
          padding: "8px",
          marginLeft: "8px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" id="tableTitle" component="div">
            Quiz: {params?.topic}
          </Typography>

          <div>
            <CustomButton
              onClick={() => {
                navigate(`/quiz-settings/${params?.topic}/create`);
              }}
              style={{
                padding: "8px 22px",
              }}
            >
              Create Quiz
            </CustomButton>
          </div>
        </div>

        <div
          style={{
            fontSize: "1.4rem",
            // borderBottom: '1px solid lightgrey',
            paddingBottom: "8px",
            marginBottom: "10px",
          }}
        ></div>

        <QuizListByTopic />
      </div>
    </AdminLayout>
  );
};

export default QuizByTopic;
