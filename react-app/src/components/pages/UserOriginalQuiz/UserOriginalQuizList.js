import React, { useEffect } from "react";
import { SERVER_URL } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import useLocalStorage from "../../../hooks/useLocalStorage";
import UserOriginalQuizItem from "./UserOriginalQuizItem";

const UserOriginalQuizList = () => {
  const [user, _] = useLocalStorage("user");
  // api call
  const [{ response, error, isLoading }, doFetch] = useFetch(
    `${SERVER_URL}/quizAssignees/quizzes/${user.id}`
  );

  useEffect(() => {
    doFetch({
      method: "GET",
    });
    console.log({ response });
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gap: "15px",
        gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
      }}
    >
      {isLoading
        ? "Getting Quizzes"
        : error
        ? "Error getting quizzes"
        : response && response?.length === 0
        ? "No Quiz found for you"
        : response?.map((quiz) => <UserOriginalQuizItem quiz={quiz} />)}
    </div>
  );
};

export default UserOriginalQuizList;
