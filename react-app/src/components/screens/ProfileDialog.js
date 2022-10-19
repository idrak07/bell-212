import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogTitle, Button,
    Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const ProfileDialog = (props) => {
    return (
        <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={props.open}
        onClose={props.close}
        aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle>{props.formmode ?  'Add New' : 'Update'}  Students</DialogTitle>
            <ValidatorForm
                onSubmit={props.addProfile}
            >
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="First Name"
                            onChange={props.changefirstname}
                            name="firstname"
                            value={props.firstname}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="last Name"
                            onChange={props.changelastname}
                            name="lastname"
                            value={props.lastname}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="phone Number"
                                onChange={props.changephonenumber}
                                name="phonenumber"
                                value={props.phonenumber}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="semester"
                                onChange={props.changesemester}
                                name="semester"
                                value={props.semester}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="City"
                                onChange={props.changecity}
                                name="city"
                                value={props.city}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={5}>
                        <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Roll"
                                onChange={props.changeroll}
                                name="roll"
                                value={props.roll}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                            {/* <FormControl component="fieldset">
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender" value={props.gender} onChange={props.changeGender}>
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl> */}
                        </Grid>
                        <Grid item xs={1}>
                         {/* <FormControl component="fieldset">
                                <FormLabel component="legend">Mark</FormLabel>
                                <RadioGroup aria-label="gender" name="selection" value={props.selection} onChange={props.changeselection}>
                                    <FormControlLabel value="Unselect" control={<Radio />} label="unselect" />
                                    <FormControlLabel value="Select" control={<Radio />} label="select" />
                                </RadioGroup>
                            </FormControl> */}
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" color="secondary">
                       {props.formmode ? 'Add' : 'Update'}
                    </Button>
                    <Button onClick={props.close} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </ValidatorForm>
        </Dialog>
    );
}

export default ProfileDialog;