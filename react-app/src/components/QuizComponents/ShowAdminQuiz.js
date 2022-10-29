import React, { useEffect, useState } from 'react';
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
     

    // paginations
    
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0)


    const setPaginate = () => {
        const sliceData = questionData?.slice(Number(`${offset}0`), Number(`${offset}0`) + perPage);
        console.log({sliceData})
        setQuestions(sliceData)
        setPageCount(Math.ceil(questionData?.length / perPage))
    }
    

    useEffect(() => {
        doFetch({
            method: "GET",
            params: {
                topic: params?.topic.toUpperCase()?.replace(' ', '_'),
            },
        })
    }, [params?.topic, offset, deleteLoading])

    useEffect(() => {
        setPaginate()
    }, [questionData])
    

    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset(selectedPage + 1)
    };


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
                ) : questions?.map(ques => (
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
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                    />
                )}
            </div>
        </div>
    </div>
  )
}

export default ShowAdminQuiz