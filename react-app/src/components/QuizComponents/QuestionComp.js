import Input from '@mui/material/Input';
import React, { useState } from 'react';
import styles from './CreateQuiz.module.css';

const QuestionComp = ({ questionState, setQuestionState }) => {
  const [questionChoices, setQuestionChoices] = useState([
    questionState.choice1,
    questionState.choice2,
    questionState.choice3,
    questionState.choice4
  ])

  const handleChoiceChange = (e) => {
    setQuestionState({
      ...questionState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div class={styles.question__inner}>

      <div class={styles.question}>
        <p className={styles.question_para}>Question:</p>
        <div class="qBottom w-full">
          <textarea onChange={(e) => {
            setQuestionState({
              ...questionState,
              description: e.target.value
            })
          }} value={questionState.description} class={styles.text_area} name="question desc" id="" placeholder='Write Question'></textarea>
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
              <input checked={questionState.correctChoice === questionState.choice1} onChange={(e) => {
                setQuestionState({
                  ...questionState,
                  correctChoice: questionState.choice1
                })
              }} className={styles.radio} type="radio" name="mcq" id="" />

              {/* <Radio
                  checked={questionState.correctChoice === questionState.choice1} 
                  onChange={(e) => {
                    setQuestionState({
                      ...questionState,
                      correctChoice: questionState.choice1
                    })
                  }}  className={styles.radio} 
                  // type="radio" 
                  name="mcq" 
                  id=""
                  // inputProps={{ 'aria-label': `${questionState.choice1}` }}
                /> */}
            </label>

            <span className={styles.input_el}>
              <Input style={{
                width: '100%',
              }} placeholder="Choice 1" onChange={handleChoiceChange} name='choice1' type="text" value={questionState.choice1} />

              {/* <input style={{
                  width: '100%',
                }} className={styles.choiceInput} placeholder="Choice 1" onChange={handleChoiceChange} name='choice1'  type="text" value={questionState.choice1} /> */}
            </span>
          </li>

          <li className={styles.choiceItem}>
            <label>
              <input checked={questionState.correctChoice === questionState.choice2} onChange={(e) => {
                setQuestionState({
                  ...questionState,
                  correctChoice: questionState.choice2
                })
              }} className={styles.radio} type="radio" name="mcq" id="" />
            </label>

            <span className={styles.input_el}>
              {/* <input style={{
                  width: '100%',
                }} className={styles.choiceInput} placeholder="Choice 2" onChange={handleChoiceChange} name='choice2'  type="text"  value={questionState.choice2} /> */}
              <Input
                style={{
                  width: '100%',
                }} placeholder="Choice 2" onChange={handleChoiceChange} name='choice2' type="text" value={questionState.choice2}
              />
            </span>
          </li>

          <li className={styles.choiceItem}>
            <label>
              <input checked={questionState.correctChoice === questionState.choice3} onChange={(e) => {
                setQuestionState({
                  ...questionState,
                  correctChoice: questionState.choice3
                })
              }} className={styles.radio} type="radio" name="mcq" id="" />
            </label>

            <span className={styles.input_el}>
              {/* <input style={{
                  width: '100%',
                }} className={styles.choiceInput} placeholder="Choice 3"  onChange={handleChoiceChange} name='choice3' type="text" value={questionState.choice3} /> */}
              <Input
                style={{
                  width: '100%',
                }} placeholder="Choice 3" onChange={handleChoiceChange} name='choice3' type="text" value={questionState.choice3}
              />
            </span>
          </li>

          <li className={styles.choiceItem}>
            <label>
              <input checked={questionState.correctChoice === questionState.choice4} onChange={(e) => {
                setQuestionState({
                  ...questionState,
                  correctChoice: questionState.choice4
                })
              }} className={styles.radio} type="radio" name="mcq" id="" />
            </label>

            <span className={styles.input_el}>
              {/* <input style={{
                  width: '100%',
                }} className={styles.choiceInput} placeholder="Choice 4" onChange={handleChoiceChange} name='choice4'  type="text" value={questionState.choice4} /> */}
              <Input
                style={{
                  width: '100%',
                }}  placeholder="Choice 4" onChange={handleChoiceChange} name='choice4' type="text" value={questionState.choice4}
              />
            </span>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default QuestionComp