import React, { useState, useEffect } from 'react'
import { Grid, Typography, } from '@material-ui/core';
import Controls from "../../ui/FormComponents/controls/Controls";
import { useForm, Form } from '../../ui/FormComponents/useForm';


export const allBloodGroups = [
  {id: '1', title: 'A-positive (A+)'},
  {id: '2', title: 'A-negative (A-)'},
  {id: '3', title: 'B-positive (B+)'},
  {id: '4', title: 'B-negative (B-)'},
  {id: '5', title: 'AB-positive (AB+)'},
  {id: '6', title: 'AB-negative (AB-)'},
  {id: '7', title: 'O-positive (O+)'},
  {id: '8', title: 'O-negative (O-)'},
]


export const allUnitList = [
  {id: '1', title: 'BAF Base Basar'},
  {id: '2', title: 'BAF Base Bangabandhu'},
  {id: '3', title: 'BAF Base Matiur'},
  {id: '4', title: 'BAF Base Sheikh Hasina'},
  {id: '5', title: 'BAF Base Zahur'},
  {id: '6', title: 'BAF Base Paharkanchanpur'},  
]

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    bd_no: '',
    svc_id: '',
    first_name: '',
    second_name: '',
    branch: '',
    unit: '',
    date_of_birth: '',
    blood_group: '',
    mobile: '',
    email: '',
    password: ''
}

export default function SignupForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        // check validation for all input fileds
        if ('first_name' in fieldValues)
            temp.first_name = fieldValues.first_name ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        
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
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
              Signup Here
            </Typography>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="bd_no"
                        label="BD No."
                        value={values.bd_no}
                        onChange={handleInputChange}
                        error={errors.bd_no}
                    />
                    <Controls.Input
                        label="SVC ID No."
                        name="svc_id"
                        value={values.svc_id}
                        onChange={handleInputChange}
                        error={errors.svc_id}
                    />
                    <Controls.Input
                        name="first_name"
                        label="First Name"
                        value={values.first_name}
                        onChange={handleInputChange}
                        error={errors.first_name}
                    />
                    <Controls.Input
                        name="second_name"
                        label="Second Name"
                        value={values.second_name}
                        onChange={handleInputChange}
                        error={errors.second_name}
                    />
                    <Controls.Input
                        name="branch"
                        label="Branch"
                        value={values.branch}
                        onChange={handleInputChange}
                        error={errors.branch}
                    />
                    <Controls.Select
                        name="unit"
                        label="Unit"
                        value={values.unit}
                        onChange={handleInputChange}
                        options={allUnitList}
                        error={errors.unit}
                    />

                </Grid>
                <Grid item xs={6}>
                    
                    <div>
                        <label>
                            Date of Birth
                        </label>
                        <br />
                        <input type={'date'}></input>
                    </div>
                    <Controls.Select
                        name="blood_group"
                        label="Blood Group"
                        value={values.blood_group}
                        onChange={handleInputChange}
                        options={allBloodGroups}
                        error={errors.blood_group}
                    />

                    <Controls.Input
                        name="mobile"
                        label="Mobile No."
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                     <Controls.Input
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                     <Controls.Input
                        name="password"
                        label="Password"
                        value={values.password}
                        onChange={handleInputChange}
                        error={errors.password}
                    />
                    <div>
                        <label>Upload Photo</label>
                        <br />
                        <input type={'image'} />
                    </div>
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
