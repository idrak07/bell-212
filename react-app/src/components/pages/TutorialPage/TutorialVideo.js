import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { SERVER_URL } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CustomButton from "../../../ui/CustomButton";
import AddTutorialPage from "./AddTutorialPage";
import EditTutorialPage from "./EditTutorialPage";
import "./TutorialPage.css";
import TutorialRightSideList from "./TutorialRightSideList";
import WatchTutorial from "./WatchTutorial";

export const predefinedChapters = [
  {
    id: "CHAPTER_1",
    name: "Chapter 1",
  },
  {
    id: "CHAPTER_2",
    name: "Chapter 2",
  },
  {
    id: "CHAPTER_3",
    name: "Chapter 3",
  },
  {
    id: "CHAPTER_4",
    name: "Chapter 4",
  },
  {
    id: "CHAPTER_5",
    name: "Chapter 5",
  },
];
const rightSideContent = [
  {
    id: 1,
    subject: "Why React Hooks?",
    link: "https://www.youtube.com/watch?v=eX_L39UvZes",
  },
  {
    id: 2,
    subject: "How to write better React code?",
    link: "https://www.youtube.com/watch?v=0yzoAbrjV6k",
  },
];

const TutorialVideo = () => {
  const [authenticatedUser, setAuthenticatedUser] = useLocalStorage("user");
  const [shouldRefetch, setShouldRefetch] = useState(false)
  const params = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [selectedTutorialItem, setSelectedTutorialItem] = useState(null);
  const [isShowTutorial, setIsShowTutorial] = useState(false);

  const [selectedChapter, setSelectedChapter] = useState("CHAPTER_1");

  const { topic } = params;
  const location = useLocation();

  // api call
  const [{ response, error, isLoading }, doFetch] = useFetch(
    `${SERVER_URL}/tutorials`
  );

  useEffect(() => {
    doFetch({
      method: "GET",
      params: {
        topic: topic.toUpperCase()?.replace(" ", "_"),
        chapter: selectedChapter,
      },
    });
    console.log({ response });
  }, [shouldRefetch,setShouldRefetch,selectedChapter, isCreate, isEdit,setIsEdit,setIsCreate, location.pathname]);

  return (
    <div
      className="tutorial"
      style={{
        background: "#fff",
        borderRadius: "15px",
        padding: "1.4rem",
      }}
    >
      {!isEdit && !isCreate && !isShowTutorial ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "1rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
              }}
            >
              Chapters
            </h2>

            {authenticatedUser.authority === "ROLE_ADMIN" && (
              <CustomButton
                onClick={() => setIsCreate(true)}
                style={{
                  padding: "5px 14px",
                }}
              >
                Add Subject/Link
              </CustomButton>
            )}
          </div>

          <div className="content">
            <div className="left-side">
              {predefinedChapters.map((item) => (
                <div key={item.id}>
                  <button
                    className={`${item.id === selectedChapter && "active-btn"}`}
                    onClick={() => {
                      setSelectedChapter(item.id);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                    }}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </div>
            <div className="right-side">
              <div>
                {isLoading ? (
                  "Loading tutorials.."
                ) : error ? (
                  "Error getting tutorials"
                ) : response && response?.length === 0 ? (
                  <div>
                    <p>No tutorials found</p>
                  </div>
                ) : (
                  <TutorialRightSideList
                    tutorialList={response}
                    setSelectedTutorialItem={setSelectedTutorialItem}
                    setIsShowTutorial={setIsShowTutorial}
                    setIsEdit={setIsEdit}
                    setShouldRefetch={setShouldRefetch}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : isCreate ? (
        <AddTutorialPage back={() => setIsCreate(false)} />
      ) : isEdit ? (
        <EditTutorialPage
          back={() => setIsEdit(false)}
          item={selectedTutorialItem}
        />
      ) : isShowTutorial ? (
        <WatchTutorial
          back={() => setIsShowTutorial(false)}
          item={selectedTutorialItem}
        />
      ) : null}
    </div>
  );
};

export default TutorialVideo;
