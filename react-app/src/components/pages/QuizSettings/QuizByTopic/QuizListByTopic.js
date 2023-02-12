import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { SERVER_URL } from "../../../../constants";
import useFetch from "../../../../hooks/useFetch";
import QuizListItemByTopic from "./QuizListItemByTopic";

export const quizzesByTopics = [
  {
    id: 1,
    title: "Motor Chapter Quiz",
    startTime: new Date(),
    endTime: new Date(),
    points: 0,
    topic: "Engine",
    questions: [],
    assigneeList: [],
    status: "ACTIVE",
  },
  {
    id: 2,
    title: "Motor Chapter-2 Quiz",
    startTime: new Date(),
    endTime: new Date(),
    points: 0,
    topic: "Engine",
    questions: [],
    assigneeList: [],
    status: "ACTIVE",
  },
  {
    id: 3,
    title: "Motor Chapter-3 Quiz",
    startTime: new Date(),
    endTime: new Date(),
    points: 4,
    topic: "Engine",
    questions: [],
    assigneeList: [],
    status: "PUBLISHED",
  },
  {
    id: 5,
    title: "Motor Chapter-4 Quiz",
    startTime: new Date(),
    endTime: new Date(),
    points: 0,
    topic: "Engine",
    questions: [],
    assigneeList: [],
    status: "CANCELED",
  },
];

const QuizListByTopic = () => {
  const params = useParams();
  const { topic } = params;
  const location = useLocation()
  // api call
  const [{ response, error, isLoading }, doFetch] = useFetch(
    `${SERVER_URL}/quizzes/by-topic`
  );

  useEffect(() => {
    doFetch({
      method: "GET",
      params: {
        topic: topic.toUpperCase()?.replace(" ", "_"),
      },
    });
    console.log({ response });
  }, [location.pathname]);
  return (
    <div
      style={{
        display: "grid",
        gap: "15px",
        gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
        gridTemplateRows: '1fr'
      }}
    >
      {isLoading
        ? "Getting Quizzes"
        : error
        ? "Error getting quizzes"
        : response && response?.length === 0
        ? "No Quiz found for this topic"
        : response?.map((quiz) => <QuizListItemByTopic quiz={quiz} />)}
    </div>
  );
};

export default QuizListByTopic;
