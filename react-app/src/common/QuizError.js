import React, { useEffect } from "react";

const QuizError = ({ error }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.href = '/quiz-list';
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        margin: "20px",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2> {error} </h2>
      <h4>Redirecting to Quiz Page</h4>
    </div>
  );
};

export default QuizError;
