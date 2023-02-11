import { Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { SERVER_URL } from "../../../../constants";
import useFetch from "../../../../hooks/useFetch";
import { arrayToDate, timestampToDatetimeInputString } from "../../../../util";
import CreateQuizSettingsForm from "../CreateQuizSettings/CreateQuizSettingsForm";
import QuestionStudentList from "./QuestionStudentList";

const EditQuizSettingsView = () => {
  const params = useParams();
  const { id } = params;
  // api call
  const [{ response, error, isLoading }, doFetch] = useFetch(
    `${SERVER_URL}/quiz/${id}`
  );

  useEffect(() => {
    doFetch({
      method: "GET",
    });
    console.log({ response });
  }, []);

  return (
    <div>
      {isLoading
        ? "Getting quiz details"
        : error
        ? "Error getting quiz details"
        : response && (
            <>
              <CreateQuizSettingsForm
                isEdit={true}
                editQuiz={{
                  ...response,
                  startTime: timestampToDatetimeInputString(arrayToDate(response.startTime)),
                  endTime: timestampToDatetimeInputString(arrayToDate(response.endTime)),
                }}
              />

              <Paper style={{ padding: "25px 15px", marginTop: "1rem" }}>
                <QuestionStudentList
                  quiz={{
                    ...response,
                    startTime: arrayToDate(response.startTime),
                    endTime: arrayToDate(response.endTime),
                  }}
                />
              </Paper>
            </>
          )}
    </div>
  );
};

export default EditQuizSettingsView;
