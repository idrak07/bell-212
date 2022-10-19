import React from 'react';
import {Dialog, DialogActions, DialogContent, DialogTitle, Button,
    Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const CustomerDialog = (props) => {
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
                onSubmit={props.addCustomer}
            >
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Full Question"
                            onChange={props.changequestion}
                            name="question"
                            value={props.question}
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
                            label="option 3"
                            onChange={props.changeoption3}
                            name="option3"
                            value={props.option3}
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
                                label="option 1"
                                onChange={props.changeoption1}
                                name="option1"
                                value={props.option1}
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
                                label="option 5"
                                onChange={props.changeoption5}
                                name="option5"
                                value={props.option5}
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
                                label="option 4"
                                onChange={props.changeoption4}
                                name="option4"
                                value={props.option4}
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
                                label="option 2"
                                onChange={props.changeoption2}
                                name="option2"
                                value={props.option2}
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
                         <FormControl component="fieldset">
                                <FormLabel component="legend">Mark</FormLabel>
                                <RadioGroup aria-label="gender" name="selection" value={props.selection} onChange={props.changeselection}>
                                    <FormControlLabel value="Unselect" control={<Radio />} label="unselect" />
                                    <FormControlLabel value="Select" control={<Radio />} label="select" />
                                </RadioGroup>
                            </FormControl>
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

export default CustomerDialog;