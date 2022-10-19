import React, { useEffect, useState } from 'react';
import {Table, TableBody, TableCell, TableRow, TableHead,
    TableContainer, Paper, makeStyles, Container,
    Typography, Button, Grid, IconButton} from '@material-ui/core';
import {AddCircle, Edit, Delete} from '@material-ui/icons';
import {ScaleLoader} from 'react-spinners';
import {ToastContainer, toast} from 'react-toastify';
import {getCustomers, addCustomer, getCustomer, updateCustomer, deleteCustomer} from '../data/customerData';
import CustomerDialog from './CustomerDialog';

const Customer = () => {
    const classes  = useStyles();
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [formMode, setFormMode] = useState(true);
    const [custId, setCustId] = useState('');
    const [question, setFirstName] = useState('');
    const [option3, setLastName] = useState('');
    const [option1, setPhoneNumber] =  useState('');
    const [option2, setMaritalStatus] = useState('');
    const [selection, setGender] = useState('');
    const [option4, setCity] = useState('');
    const [option5, setPostCode] = useState('');
    const override =`
        display: flex;
        align-items: center;
        justify-content: center;    
        border-color: red;
    `;
    const handleClose = () => {
        setOpen(false);
    }
    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        setLastName(event.target.value);
    }
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }
    const handleMaritalStatus = (event) => {
        setMaritalStatus(event.target.value);
    }
    const handleGender = (event) => {
        setGender(event.target.value);
    }
    const handleCity = (event) => {
        setCity(event.target.value);
    }
    const handlePostCode = (event) => {
        setPostCode(event.target.value);
    }
    const getlist = async () => { 
        try {
            setLoading(true);
            const list = await getCustomers();
            console.log(list)
            setCustomers(list);
            setLoading(false);
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    }
    const getOneCustomer = async (id) => {
            try {
                setFormMode(false);
                setCustId(id);
                const response = await getCustomer(id);
                 setFirstName(response.question);
                 setLastName(response.option3);
                 setPhoneNumber(response.option1);
                 setMaritalStatus(response.option2);
                 setGender(response.selection);
                 setCity(response.option4);
                 setPostCode(response.option5);
                 setOpen(true);
            } catch (error) {
                toast.error(error.message);
            }

    }
    const deleteHandler = async (id) => {
            try {
                await deleteCustomer(id);
                getlist();
                toast.success('Question Deleted Successfully');
            } catch (error) {
                toast.error(error.message);
            }
    }
    const handleAdd = () => {
            setOpen(true);
            setFormMode(true);
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setPostCode('');
            setCity('');
            setMaritalStatus('');
            setGender(''); 
    }

    const addCustomerHandler = async () => {
            try {
                 const customer = {
                     question,
                     option1,
                     option2,
                     option3,
                     selection,
                     option4,
                     option5
                 }
                if (formMode) {
                    await addCustomer(customer);
                    toast.success('Question Added Successfully');
                    getlist();
                    setOpen(false);
                    setFirstName('');
                    setLastName('');
                    setPhoneNumber('');
                    setPostCode('');
                    setCity('');
                    setMaritalStatus('');
                    setGender(''); 
                }else {
                    await updateCustomer(custId, customer);
                    toast.success('Student Updated Successfully');
                    getlist();
                    setOpen(false);
                    setFirstName('');
                    setLastName('');
                    setPhoneNumber('');
                    setPostCode('');
                    setCity('');
                    setMaritalStatus('');
                    setGender(''); 
                }
            } catch (error) {
                toast.error(error.message);
            }
    }

    useEffect(() => {
        getlist();
    }, []);
    return (
        <Container className={classes.container}>
            <ToastContainer/>
            <TableContainer component={Paper}>
                <Grid container>
                    <Grid item xs={8}>
                    <Typography className={classes.title} variant="h6" component="div">
                        Engine Question
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAdd}
                        className={classes.button}
                        startIcon={<AddCircle/>}
                    >Add Question</Button>
                    </Grid>
                </Grid>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.head}>Full Question</TableCell>
                            <TableCell className={classes.head}>Option 1</TableCell>
                            <TableCell className={classes.head}>Option 2</TableCell>
                            <TableCell className={classes.head}>Option 3</TableCell>
                            <TableCell className={classes.head}>Option 4</TableCell>
                            {/* <TableCell className={classes.head}>Option 5</TableCell> */}
                            <TableCell className={classes.head}>Status</TableCell>
                            <TableCell className={classes.head}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7}>
                                    <ScaleLoader 
                                     css={override}
                                    size={150}
                                    color={"#eb4034"}
                                    loading={loading}/>
                                </TableCell>
                            </TableRow>
                        ) : (
                            <>
                            {customers.map((cust) => (
                                <TableRow key={cust.id}>
                                  <TableCell>{cust.question} </TableCell>
                                  <TableCell>{cust.option1}</TableCell>
                                  <TableCell>{cust.option2}</TableCell>
                                  <TableCell>{cust.option3}</TableCell>
                                  <TableCell>{cust.option4}</TableCell>
                                  {/* <TableCell>{cust.postcode}</TableCell> */}
                                  <TableCell>{cust.selection}</TableCell>
                                  <TableCell>
                                    <IconButton onClick={() => getOneCustomer(cust.id)} color="primary" aria-label="update customer">
                                            <Edit />
                                    </IconButton>
                                    <IconButton onClick={() => deleteHandler(cust.id)} color="secondary" aria-label="delete customer">
                                        <Delete />
                                    </IconButton>
                                  </TableCell>
                              </TableRow>
                            ))}
                              
                            </>
                        )}
                        
                    </TableBody>
                </Table>  
            </TableContainer>
            <CustomerDialog
                open={open} 
                close={handleClose}
                formmode={formMode}
                question={question}
                option3={option3}
                option1={option1}
                option5={option5}
                option4={option4}
                option2={option2}
                selection={selection}
                changequestion={handleFirstName}
                changeoption3={handleLastName}
                changeoption1={handlePhoneNumber}
                changeoption5={handlePostCode}
                changeoption4={handleCity}
                changeoption2={handleMaritalStatus}
                changeselection={handleGender}
                addCustomer={addCustomerHandler}
            />
        </Container>
    );
}


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    container: {
        marginTop: '40px'
    }, 
    title: {
        flex: '1 1 100%',
        padding: '20px'
    },
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    button: {
        margin: theme.spacing(1),
        float: 'right',
    },
}));

export default Customer;