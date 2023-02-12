import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { SERVER_URL } from "../../../constants";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CustomButton from "../../../ui/CustomButton";
import { arrayToDate } from "../../../util";
import ShowQuestionComp from "../GiveTestPage/ShowQuestionComp";
import CountDownArea from "./CountDownArea";

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

  const time = arrayToDate(quiz?.endTime);
  const url2 = `${SERVER_URL}/quizAssignees/quiz/${quizId}/user/${user.id}/attend`;

  useEffect(() => {
    // setAttended()
  }, []);

//    useEffect(() => {
//     window.addEventListener('beforeunload', alertUser)
//     window.addEventListener('unload', handleSubmitWhenTabClose)
//     return () => {
//       window.removeEventListener('beforeunload', alertUser)
//       window.removeEventListener('unload', handleSubmitWhenTabClose)
//       handleSubmitWhenTabClose()
//     }
//   }, [])
  
//   const alertUser = e => {
//     e.preventDefault()
//     e.returnValue = ''
//   }

//   const handleSubmitWhenTabClose = async () => {
//     await handleSubmitPoint(5)
//   }

  const setAttended = async () => {
    try {
      await callApi(url2);
    } catch (e) {
      console.log(e);
    }
  };

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

      const result = await Promise.all([callApi(url1), callApi(url2)]);
      console.log({ result });
      window.location.href = "/quiz-list";
    } catch (e) {
      console.log(e);
      toast.error("Couldn't submit your quiz");
    }
  };

  // console.log({time})

  return (
    <div className="d-container">
      <div
        className="d-content"
        style={{
          width: "100%",
        }}
      >
        {/* countdown */}
        <CountDownArea
          quiz={quiz}
          time={time}
          handleSubmitResult={handleSubmitResult}
        />

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
