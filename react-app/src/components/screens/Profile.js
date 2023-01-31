import React, { useEffect, useState } from 'react';
import {Table, TableBody, TableCell, TableRow, TableHead,
    TableContainer, Paper, makeStyles, Container,
    Typography, Button, Grid, IconButton} from '@material-ui/core';
import {AddCircle, Edit, Delete} from '@material-ui/icons';
import {ScaleLoader} from 'react-spinners';
import {ToastContainer, toast} from 'react-toastify';
import {getProfiles, addProfile, getProfile, updateProfile, deleteProfile} from '../data/profileData';
import ProfileDialog from './ProfileDialog'

const Profile = () => {
    const classes  = useStyles();
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [formMode, setFormMode] = useState(true);
    const [custId, setCustId] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [phonenumber, setPhoneNumber] =  useState('');
    const [semester, setSemester] = useState('');
    const [city, setCity] = useState('');
    const [roll, setRoll] = useState('');
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
    const handleSemester = (event) => {
        setSemester(event.target.value);
    }
    const handleCity = (event) => {
        setCity(event.target.value);
    }
    const handleRoll = (event) => {
        setRoll(event.target.value);
    }
    const getlist = async () => { 
        try {
            setLoading(true);
            const list = await getProfiles();
            console.log(list)
            setProfiles(list);
            setLoading(false);
        } catch (error) {
            toast.error(error.message);
            setLoading(false);
        }
    }
    const getOneProfile = async (id) => {
            try {
                setFormMode(false);
                setCustId(id);
                const response = await getProfile(id);
                 setFirstName(response.firstname);
                 setLastName(response.lastname);
                 setPhoneNumber(response.phonenumber);
                 setSemester(response.semester);
                 setRoll(response.roll);
                 setCity(response.city);
                 setOpen(true);
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
            setCity('');
            setSemester('');
            setRoll(''); 
    }

    const addProfileHandler = async () => {
            try {
                 const profile = {
                   firstname,
                   lastname,
                   phonenumber,
                   semester,
                   city,
                   roll
                 }
                if (formMode) {
                    await addProfile(profile);
                    toast.success('Question Added Successfully');
                    // getlist();
                    setOpen(false);
                    setFirstName('');
                    setLastName('');
                    setPhoneNumber('');
                    setCity('');
                    setSemester('');
                    setRoll(''); 
                }else {
                    await updateProfile(custId, profile);
                    toast.success('Profile Updated Successfully');
                     getlist();
                    setOpen(false);
                    setFirstName('');
                    setLastName('');
                    setPhoneNumber('');
                    setCity('');
                    setSemester('');
                    setRoll(''); 
                }
            } catch (error) {
                toast.error(error.message);
            }
    }

    useEffect(() => {

        // profiles.map((cust) => (
        //      key=cust.id
          
        // ))

         getlist()
    }, []);
    return (
        <Container className={classes.container}>
            <ToastContainer/>
            <TableContainer component={Paper}>
                <Grid container>
                    <Grid item xs={8}>
                    <Typography className={classes.title} variant="h6" component="div">
                        Profile
                    </Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAdd}
                        className={classes.button}
                        startIcon={<AddCircle/>}
                    >Add Profile</Button>
                    </Grid>
                </Grid>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.head}>Name</TableCell>
                            <TableCell className={classes.head}>Semester</TableCell>
                            <TableCell className={classes.head}>Roll</TableCell>
                            <TableCell className={classes.head}>City</TableCell>
                            <TableCell className={classes.head}>Phonenumber</TableCell>
                            <TableCell className={classes.head}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {profiles.length === 0 ? (
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
                            {profiles.map((cust) => (
                                <TableRow key={cust.id} >
                                  <TableCell>{cust.firstname} {cust.lastname} </TableCell>
                                  <TableCell>{cust.semester}</TableCell>
                                  <TableCell>{cust.roll}</TableCell>
                                  <TableCell>{cust.city}</TableCell>
                                  <TableCell>{cust.phonenumber}</TableCell>
                                  <TableCell>
                                    <IconButton onClick={() => getOneProfile(cust.id)} color="primary" aria-label="update customer">
                                            <Edit />
                                    </IconButton>
                                  </TableCell>
                              </TableRow>
                            ))}
                              
                            </>
                        )}
                        
                    </TableBody>
                </Table>  
            </TableContainer>
            <ProfileDialog
                open={open} 
                close={handleClose}
                formmode={formMode}
                firstname={firstname}
                lastname={lastname}
                semester={semester}
                city={city}
                roll={roll}
                phonenumber={phonenumber}
                changefirstname={handleFirstName}
                changelastname={handleLastName}
                changephonenumber={handlePhoneNumber}
                changecity={handleCity}
                changeroll={handleRoll}
                changesemester={handleSemester}
                addProfile={addProfileHandler}
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
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.white,
    },
    button: {
        margin: theme.spacing(1),
        float: 'right',
    },
}));

export default Profile;