import React, { useEffect } from "react";
import { useCountdown } from "../../../hooks/useCountDown";
import { arrayToDate, formatDate } from "../../../util";

const CountDownArea = ({ quiz, time, handleSubmitResult }) => {
  const [days, hours, minutes, seconds] = useCountdown(time);

  useEffect(() => {
    if (seconds && seconds <= 0) {
      handleSubmitResult();
    }
    console.log({ minutes, seconds });
    // if (!time) {
    //   window.location.href = "/mock-quiz";
    // }
    // if (getDateDiff(new Date(time), new Date()) <= 0) {
    //   window.localStorage.removeItem(`/mock/${params?.type}/${params?.topic}`);
    //   window.location.href = "/mock-quiz";
    // }
  }, [seconds]);
  return (
    <>
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
            <span>{hours < 0 ? '00' : hours}</span>
            <span>:</span>
            <span>{minutes < 0 ? '00' : minutes}</span>
            <span>:</span>
            <span>{seconds < 0 ? '00' : seconds}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDownArea;
