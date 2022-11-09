import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SERVER_URL } from '../../constants';
import useFetch from '../../hooks/useFetch';
import CustomButton from '../../ui/CustomButton';
import QuestionPaginate from './QuestionPaginate';
import ShowQuestionWithAns from './ShowQuestionWithAns';

const ShowAdminQuiz = () => {
    const params = useParams();
    const [questions, setQuestions] = useState(null)
    
    const [{ response:questionData, error:questionError, isLoading:questionLoading }, doFetch] = useFetch(`${SERVER_URL}/questions`);
    
    const [{ response, error:deleteError, isLoading:deleteLoading }, deleteQ] = useFetch(`${SERVER_URL}/questions`);

    const handleDeleteQuestion = (question) => {
        deleteQ({
            method: 'DELETE',
            mode: 'no-cors',
            params: {
                id: question.id
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
        });
    }

    useEffect(() => {
        doFetch({
            method: "GET",
            params: {
                topic: params?.topic.toUpperCase()?.replace(' ', '_'),
            },
        })
    }, [params?.topic, deleteLoading])


    // new pagination
    const [currentPage, setCurrentPage] = useState(1);
    let NUM_OF_RECORDS = questionData?.length;
    let LIMIT = 5;

    const onPageChanged = useCallback(
        (event, page) => {
        event.preventDefault();
        setCurrentPage(page);
        },
        [setCurrentPage]
    );
    const currentData = questionData?.slice(
        (currentPage - 1) * LIMIT,
        (currentPage - 1) * LIMIT + LIMIT
    );

    useEffect(() => {
        window.scrollTo(0,0)
    },[questions])

  return (
    <div style={{
        padding: '14px 18px',
    }}>
        <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center'
            }}
        >
    
            <h2 style={{
                fontSize: '1.6rem',
                fontWeight: 500
            }}>
                {params?.topic} Question 
            </h2>
        
        
            <div style={{
                whiteSpace: 'nowrap'
            }}>
                <Link to={`/quiz/${params?.topic}/create`}>
                    <CustomButton type='primary'>Create Question</CustomButton>
                </Link>
            </div>
        </div>

        <div style={{
            background: '#fff',
            padding: '2rem',
            borderRadius: '15px',
            marginTop: '15px'
        }}>
            <div>
                {questionLoading ? 'Loading questions' : questionError ? 'Error getting questions' : questionData && questionData?.length === 0 ? (
                    <div>
                        <p>No Question found</p>
                    </div>
                ) : currentData?.map(ques => (
                    <ShowQuestionWithAns key={ques.id} question={ques} handleDeleteQuestion={handleDeleteQuestion}/>
                ))}
                
                {/* {
                    dummyQuestions.map(ques => (
                        <ShowQuestionWithAns question={ques} handleDeleteQuestion={handleDeleteQuestion}/>
                    ))
                } */}
            </div>
              
            <div>
                {!!questionData?.length && (
                    <QuestionPaginate
                        totalRecords={NUM_OF_RECORDS}
                        pageLimit={LIMIT}
                        pageNeighbours={2}
                        onPageChanged={onPageChanged}
                        currentPage={currentPage}
                    />
                )}
            </div>
        </div>
    </div>
  )
}

export default ShowAdminQuiz