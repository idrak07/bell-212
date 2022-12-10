import { Paper } from "@material-ui/core";
import React from "react";
import Controls from "../../../../ui/FormComponents/controls/Controls";
import { Form, useForm } from "../../../../ui/FormComponents/useForm";
import styles from '../QuizSettings.module.css'

export const userInitialFormValues = {
  quiz_name: '',
	start_time: '',
	end_time: ''
}

const CreateQuizSettingsForm = () => {
  const validate = (fieldValues = values) => {
    console.log(fieldValues)
    let temp = { ...errors }
    // check validation for all input fileds
    Object.keys(fieldValues).forEach(key => {
        if(fieldValues[key]) {
            temp[key] = ''
        } else {
            temp[key] = 'This field is required'
        }
    })
    
    if ('email' in fieldValues)
        temp.email = fieldValues.email && (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length > 11 ? "" : "Minimum 11 numbers required."
    
    
    setErrors({
        ...temp
    })
    if (fieldValues == values)
        return Object.values(temp).every(x => x == "")

}

  const {
      values,
      setValues,
      errors,
      setErrors,
      handleInputChange,
      resetForm
  } = useForm(userInitialFormValues, true, validate);

  const handleSubmit = e => {
      e.preventDefault()
      console.log(values)
      if (validate()){
          const {email, password} = values
          resetForm()
      }
  }
  return <div>
    <Form onSubmit={handleSubmit}>
            <Paper style={{padding: '25px 15px'}}>

              <div className={styles.container}>
                  <div className={styles.item}>
                      <Controls.Input
                          id='quiz_name'
                          type='text'
                          placeholder={'Enter Quiz Name'}
                          name="quiz_name"
                          label="Quiz Name"
                          value={values.quiz_name}
                          onChange={handleInputChange}
                          error={errors.quiz_name}
                      />
                      <Controls.Input
                          id='start_time'
                          type='datetime-local'
                          placeholder={'Enter Start time'}
                          label="Start Time"
                          name="start_time"
                          value={values.start_time}
                          onChange={handleInputChange}
                          error={errors.start_time}
                      />
                    </div>
                    <div className={styles.item}>
                      <Controls.Input
                          id='end_time'
                          type='datetime-local'
                          placeholder={'Enter End Time'}
                          name="end_time"
                          label="End end_time"
                          value={values.end_time}
                          onChange={handleInputChange}
                          error={errors.end_time}
                      />
                     
                    </div>

                </div>

                 <div style={{
                        display: 'flex',
                        gap: '8px',
                        marginTop: '8px'
                      }}>
                          <Controls.Button
                              type="submit"
                              text="Submit" />
                      </div>
            </Paper>
        </Form>
  </div>;
};

export default CreateQuizSettingsForm;
