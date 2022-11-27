import React, { useState, useEffect } from 'react'
import { Grid, Typography, Link, Container} from '@material-ui/core';
import Controls from "../../ui/FormComponents/controls/Controls";
import { useForm, Form } from '../../ui/FormComponents/useForm';
import fire from './firebase.init';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

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

export const userInitialFormValues = {
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
    password: '',
    photo: ''
}

export default function SignupForm(props) {

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
            handleSignUp(email, password)
            resetForm()
        }
    }

    const handleSignUp = (email, password) => {
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                if(response) {
                    props.toggle();
                    toast.success('User Registered Successfully');
                
                }
            }).catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        toast.error(error.message);
                        break;
                    case 'auth/invalid-email': 
                        toast.error(error.message);                    
                        break;
                    case 'auth/weak-password':
                        toast.error(error.message);
                        break;
                }
            });
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <ToastContainer/>

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
                            Date of Birth {JSON.stringify(values.date_of_birth)}
                        </label>
                        <br />
                        {/* <input type={'date'}></input>
                         */}
                         <Controls.DatePicker 
                            name='date_of_birth' 
                            label="Date of Birth" 
                            value={values.date_of_birth}
                            onChange={handleInputChange}
                            error={errors.date_of_birth}
                         />
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
                        <input type={'file'} accept={'image'} />
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

        <Grid container>
        <Grid item>
        <Link onClick={props.toggle}  variant="body2">
            {"Already have an account? Sign In"}
        </Link>
        </Grid>
        </Grid>
        </>
    )
}
