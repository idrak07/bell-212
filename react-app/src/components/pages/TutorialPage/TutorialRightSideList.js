import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { SERVER_URL } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CustomButton from "../../../ui/CustomButton";

const TutorialRightSideList = ({
  tutorialList,
  setSelectedTutorialItem,
  setIsShowTutorial,
  setIsEdit,
  setShouldRefetch,
}) => {
  const [authenticatedUser, _] = useLocalStorage("user");
  const [
    { response: deleteRes, error: deleteErr, isLoading: deleteLoading },
    deleteTutorial,
  ] = useFetch(`${SERVER_URL}/tutorials`);

  const handleDeleteTutorial = async (item) => {
    try {
      await deleteTutorial({
        method: "DELETE",
        params: {
          id: item.id,
        },
      });
      setShouldRefetch(true);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      style={{
        display: "grid",
        gap: "15px",
        gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        gridAutoRows: "1fr",
      }}
    >
      {tutorialList?.map((item) => (
        <>
          <Card
            variant="outlined"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <React.Fragment>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.subject}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>

                <CardActions style={{ marginTop: "auto" }}>
                  <CustomButton
                    variant="primary"
                    onClick={() => {
                      setSelectedTutorialItem(item);
                      setIsShowTutorial(true);
                    }}
                    style={{
                      whiteSpace: "nowrap",
                      padding: "4px 18px",
                      fontSize: "15px",
                    }}
                  >
                    <i class="bi bi-eye"></i>
                  </CustomButton>
                  {authenticatedUser.authority === "ROLE_ADMIN" && (
                    <>
                      <button
                        onClick={() => {
                          setSelectedTutorialItem(item);
                          setIsEdit(true);
                        }}
                        type="button"
                        class="btn btn-success"
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                      <button
                        onClick={() => {
                          const res = window.confirm(
                            "Are you sure, you want to delete the tutorial?"
                          );
                          if (res) {
                            handleDeleteTutorial(item);
                          }
                        }}
                        type="button"
                        class="btn btn-danger"
                      >
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </>
                  )}
                </CardActions>
              </CardContent>
            </React.Fragment>
          </Card>
        </>
      ))}
    </div>
  );
};

/*
<div>
          <h3
            style={{
              fontSize: "1.04rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            Subject: {item.subject}
            {authenticatedUser.authority === "ROLE_ADMIN" && (
              <span>
                <button
                  style={{
                    borderRadius: 4,
                    background: "black",
                    color: "white",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSelectedTutorialItem(item);
                    setIsEdit(true);
                  }}
                >
                  Edit
                </button>
              </span>
            )}
          </h3>
          <p>
            Tutorial Link:
            <button
              style={{
                color: "blue",
                cursor: "pointer",
                outline: "none",
                border: "none",
              }}
              onClick={() => {
                setSelectedTutorialItem(item);
                setIsShowTutorial(true);
              }}
            >
              {" "}
              {item.link}
            </button>
          </p>
        </div>
*/

export default TutorialRightSideList;
