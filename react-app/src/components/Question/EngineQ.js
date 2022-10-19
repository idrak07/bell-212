import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TableRow, TableHead,
    TableContainer, Paper, makeStyles, Container,
    Typography, Button, Grid, IconButton} from '@material-ui/core';
    import {AddCircle, Edit, Delete} from '@material-ui/icons';
import {ScaleLoader} from 'react-spinners';
import {ToastContainer, toast} from 'react-toastify';
import firebase from '../Login/firebase.init';
import axios from 'axios';
import { SERVER_URL } from '../../constants';
import Question from './question';


const firestore = firebase.firestore();
const EngineQ = () => {
    const classes  = useStyles();
    const [questions, setQuestions] = useState('');
    const [loading, setLoading] = useState(false);
    const override =`
    display: flex;
    align-items: center;
    justify-content: center;    
    border-color: red;
`;


  function getData() {
    // firestore.collection("engine").where("selection", "==", "Select")
    // .get()
    // .then((querySnapshot) => {
    //     const list = [];
    //     querySnapshot.forEach((doc) => {
    //         list.push(doc.data());
    //     });
    //     setQuestions(list);
    //     console.log(questions)
    //     console.log(list)
        
    // })
    // .catch((error) => {
    //     console.log("Error getting documents: ", error);
    // });
    axios.get(`${SERVER_URL}/questions?topic=ENGINE`)
        .then(response => {
            // console.log(response);
            setQuestions(response.data);
            // console.log(questions);
        });
  }

  useEffect(() => {
    getData();
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
                            {/* <TableCell className={classes.head}>Actions</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {questions.length === 0 ? (
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
                            {questions.map((cust, index) => (
                                <TableRow key={cust.id}>
                                  <TableCell>{cust.description} </TableCell>
                                  <TableCell>{cust.choice1}</TableCell>
                                  <TableCell>{cust.choice2}</TableCell>
                                  <TableCell>{cust.choice3}</TableCell>
                                  <TableCell>{cust.choice4}</TableCell>
                                  {/* <TableCell>{cust.postcode}</TableCell> */}
                                  {/* <TableCell>{cust.selection}</TableCell> */}
                              </TableRow>
                            ))}
                            </>
                            
                              
                        )}
                        
                    </TableBody>
                </Table>  
            </TableContainer>
        </Container>
    );
};

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
export default EngineQ;