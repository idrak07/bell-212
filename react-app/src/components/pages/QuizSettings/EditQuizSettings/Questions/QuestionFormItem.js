
import React, { useState } from 'react'
import Input from '@mui/material/Input';
import Radio from '@mui/material/Radio';
import styles from '../../../../QuizComponents/CreateQuiz.module.css'

const QuestionFormItem = ({ question,idx, allQuestions, setAllQuestions }) => {


  const handleChoiceChange = (e) => {
    const updatedQuestions = [...allQuestions].map(ques => {
      if (ques.id == question.id) {
        return {
          ...ques,
          [e.target.name]: e.target.value
        }
      } return ques
    })
    setAllQuestions([
      ...updatedQuestions,
    ])
  }

  const handleCorrectChoice = (value) => {
    const updatedQuestions = [...allQuestions].map(ques => {
      if (ques.id == question.id) {
        return {
          ...ques,
          correctChoice: value
        }
      } return ques
    })
    setAllQuestions([
      ...updatedQuestions,
    ])
  }

  const handleQuestionName = (e) => {
    const updatedQuestions = [...allQuestions].map(ques => {
      if (ques.id == question.id) {
        return {
          ...ques,
          description: e.target.value
        }
      } return ques
    })
    setAllQuestions([
      ...updatedQuestions,
    ])
  }

  const deleteQuestion = () => {
    setAllQuestions(allQuestions.filter(ques => ques.id !== question.id))
  }

  return (
    <div class={styles.question__inner}>

      <div class={styles.question}>
        <p className={styles.question_para} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <strong>Question: {idx}</strong>
          {allQuestions.length > 1 && (
            <button onClick={deleteQuestion} type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
          )}
        </p>
        <div class="qBottom w-full">
          <textarea onChange={handleQuestionName} value={question.description} class={styles.text_area} name="question desc" id="" placeholder='Write Question'></textarea>
        </div>
      </div>

      <div class={styles.options}>
        <ul style={{
          listStyleType: 'none',
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          width: '100%'
        }}>
          <li className={styles.choiceItem}>

            <label>
              <input checked={question.correctChoice === question.choice1} onChange={() => handleCorrectChoice(question.choice1)} className={styles.radio} type="radio" name={`mcq-${question.id}`} id="" />

              {/* <Radio
                  checked={questionState.correctChoice === questionState.choice1} 
                  onChange={(e) => {
                    setQuestionState({
                      ...questionState,
                      correctChoice: questionState.choice1
                    })
                  }}  className={styles.radio} 
                  // type="radio" 
                  name={`mcq-${question.id}`} 
                  id=""
                  // inputProps={{ 'aria-label': `${questionState.choice1}` }}
                /> */}
            </label>

            <span className={styles.input_el}>
              <Input style={{
                width: '100%',
              }} placeholder="Choice 1" onChange={handleChoiceChange} name='choice1' type="text" value={question.choice1} />

              {/* <input style={{
                  width: '100%',
                }} className={styles.choiceInput} placeholder="Choice 1" onChange={handleChoiceChange} name='choice1'  type="text" value={questionState.choice1} /> */}
            </span>
          </li>

          <li className={styles.choiceItem}>
            <label>
              <input checked={question.correctChoice === question.choice2} onChange={() => handleCorrectChoice(question.choice2)} className={styles.radio} type="radio" name={`mcq-${question.id}`} id="" />
            </label>

            <span className={styles.input_el}>
              {/* <input style={{
                  width: '100%',
                }} className={styles.choiceInput} placeholder="Choice 2" onChange={handleChoiceChange} name='choice2'  type="text"  value={questionState.choice2} /> */}
              <Input
                style={{
                  width: '100%',
                }} placeholder="Choice 2" onChange={handleChoiceChange} name='choice2' type="text" value={question.choice2}
              />
            </span>
          </li>

          <li className={styles.choiceItem}>
            <label>
              <input checked={question.correctChoice === question.choice3} onChange={() => handleCorrectChoice(question.choice3)} className={styles.radio} type="radio" name={`mcq-${question.id}`} id="" />
            </label>

            <span className={styles.input_el}>
              {/* <input style={{
                  width: '100%',
                }} className={styles.choiceInput} placeholder="Choice 3"  onChange={handleChoiceChange} name='choice3' type="text" value={questionState.choice3} /> */}
              <Input
                style={{
                  width: '100%',
                }} placeholder="Choice 3" onChange={handleChoiceChange} name='choice3' type="text" value={question.choice3}
              />
            </span>
          </li>

          <li className={styles.choiceItem}>
            <label>
              <input checked={question.correctChoice === question.choice4} onChange={() => handleCorrectChoice(question.choice4)} className={styles.radio} type="radio" name={`mcq-${question.id}`} id="" />
            </label>

            <span className={styles.input_el}>
              {/* <input style={{
                  width: '100%',
                }} className={styles.choiceInput} placeholder="Choice 4" onChange={handleChoiceChange} name='choice4'  type="text" value={questionState.choice4} /> */}
              <Input
                style={{
                  width: '100%',
                }} placeholder="Choice 4" onChange={handleChoiceChange} name='choice4' type="text" value={question.choice4}
              />
            </span>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default QuestionFormItem