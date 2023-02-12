import React from "react";
import { formatDate } from "../../../../util";

const ResultPdf = ({ data, quiz }) => {
  const styles = {
    page: {
      "page-break-after": "always",
      margin: "20px",
    },
    table: {
      borderCollapse: "collapse",
      width: "100%",
      padding: "0px",
      margin: "0px",
      fontSize: "15px",
      lineHeight: "1.5",
    },
    cellBorder: {
      border: "1px solid lightgray",
      padding: "8px",
      textAlign: 'left'
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "5px",
      flexDirection: "column",
    },
    title: {
      fontSize: "1.2rem",
    },
    para: {
      fontSize: '0.9rem'
    }
  };
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h3 style={styles.title}>{quiz.title}</h3>
        <p style={styles.para}>
          Start Time: {formatDate(quiz.startTime)}
          <br />
          End Time: {formatDate(quiz.endTime)}
        </p>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.cellBorder}>BD No</th>
            <th style={styles.cellBorder}>Name</th>
            <th style={styles.cellBorder}>Unit</th>
            <th style={styles.cellBorder}>Points</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr>
              <td style={styles.cellBorder}>{user.bdNo}</td>
              <td style={styles.cellBorder}>
                {user.firstName} {user.lastName}
              </td>
              <td style={styles.cellBorder}>{user.unit}</td>
              <td style={styles.cellBorder}>{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultPdf;
