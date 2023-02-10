import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { SERVER_URL } from "../../../constants";
import { useCountdown } from "../../../hooks/useCountDown";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CustomButton from "../../../ui/CustomButton";
import { arrayToDate, formatDate } from "../../../util";
import ShowQuestionComp from "../GiveTestPage/ShowQuestionComp";

const callApi = async (url) => {
  const res = await axios.get(url);
  const data = await res.data;
  return data;
};

const GiveOriginalQuizQuestions = ({ quiz, allQuestion }) => {
  const params = useParams();
  const { quizId } = params;
  const [user, _] = useLocalStorage("user");
  const [questionList, setQuestionList] = useState(allQuestion);

  const time = localStorage.getItem(`/mock/${params?.type}/${params?.topic}`);

  const handleSubmitResult = () => {
    console.log(questionList);
    const correctWrongCount = questionList.reduce(
      (acc, currentQ) => {
        if (
          currentQ.selectedChoice &&
          currentQ.correctChoice === currentQ.selectedChoice
        ) {
          return {
            ...acc,
            totalCorrectAns: acc["totalCorrectAns"] + 1,
          };
        } else {
          return {
            ...acc,
            totalWrongAns: acc["totalWrongAns"] + 1,
          };
        }
      },
      {
        totalCorrectAns: 0,
        totalWrongAns: 0,
      }
    );

    handleSubmitPoint(correctWrongCount.totalCorrectAns);

    // alert(
    //   `Total Correct Answer: ${
    //     correctWrongCount?.totalCorrectAns || 0
    //   }, Total Wrong Answer: ${correctWrongCount?.totalWrongAns || 0} `
    // );
  };

  const handleSubmitPoint = async (point) => {
    console.log({ point });
    console.log("userid", user, "quizId", quizId);
    try {
      const url1 = `${SERVER_URL}/quizAssignees/quiz/${quizId}/user/${user.id}/${point}`;

      const url2 = `${SERVER_URL}/quizAssignees/quiz/${quizId}/user/${user.id}/attend`;

      const result = await Promise.all([callApi(url1), callApi(url2)]);
      console.log({ result });
      window.location.href = "/quiz-list";
    } catch (e) {
      console.log(e);
      toast.error("Couldn't submit your quiz");
    }
  };

  // console.log({time})
  const [days, hours, minutes, seconds] = useCountdown(new Date());

  useEffect(() => {
    // if (!time) {
    //   window.location.href = "/mock-quiz";
    // }
    // if (getDateDiff(new Date(time), new Date()) <= 0) {
    //   window.localStorage.removeItem(`/mock/${params?.type}/${params?.topic}`);
    //   window.location.href = "/mock-quiz";
    // }
  }, [seconds]);

  return (
    <div className="d-container">
      <div
        className="d-content"
        style={{
          width: "100%",
        }}
      >
        {/* countdown */}
        <div className="countdown">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              columnGap: "3px",
            }}
          >
            <p
              style={{
                textTransform: "capitalize",
                margin: "5px 0",
                fontSize: "14px",
              }}
            >
              Quiz: <strong>{quiz?.title}</strong>
            </p>
            <p
              style={{
                textTransform: "capitalize",
                margin: "5px 0",
                fontSize: "14px",
              }}
            >
              Topic: <strong>{quiz?.topic}</strong>
            </p>
            <p
              style={{
                textTransform: "capitalize",
                margin: "5px 0",
                fontSize: "14px",
              }}
            >
              Start Time:{" "}
              <strong>
                {quiz?.startTime && formatDate(arrayToDate(quiz?.startTime))}
              </strong>
            </p>
            <p
              style={{
                textTransform: "capitalize",
                margin: "5px 0",
                fontSize: "14px",
              }}
            >
              Start Time:{" "}
              <strong>
                {quiz?.endTime && formatDate(arrayToDate(quiz?.endTime))}
              </strong>
            </p>
          </div>
          <div className="timer">
            <p>Time Remaining</p>
            <div className="times">
              <span>{hours}</span>
              <span>:</span>
              <span>{minutes}</span>
              <span>:</span>
              <span>{seconds}</span>
            </div>
          </div>
        </div>

        <div className="question-list">
          {questionList?.map((question, idx) => (
            <ShowQuestionComp
              key={idx}
              sl={idx + 1}
              question={question}
              setQuestionList={setQuestionList}
              questionList={questionList}
            />
          ))}
          {/* {questionList?.length === 0 ? 'This test has no question' : null} */}
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CustomButton
            onClick={handleSubmitResult}
            style={{
              marginTop: "15px",
              minWidth: "350px",
              height: "45px",
              marginBottom: "25px",
            }}
            variant={"primary"}
          >
            Submit
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default GiveOriginalQuizQuestions;
