import { Button, Container } from "@material-ui/core";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { toast } from "react-toastify";
import bell from '../image/logo.png';
import AddEditUserForm from "../pages/UsersPage/AddUserPage/AddEditUserForm";

const theme = createTheme();

export default function SignupForm({setCurrentPage}) {
  const [isSignedUp, setIsSignedUp] = React.useState(null)


	React.useEffect(() => {
    if(isSignedUp) {
      toast.success("You're successfully signed up, Please wait for approval");
      setCurrentPage('Login')
    }
  }, [isSignedUp])

	return (
		<ThemeProvider theme={theme}>
			
				<CssBaseline />

				 <Container maxWidth={'md'}>
          
          <div style={{ marginTop: '8px'}}>
             <Button variant="text" onClick={() => setCurrentPage('Login')} startIcon={<ArrowBackIosIcon />}>
                Sign in
            </Button>
          </div>
			 
          <div style={{textAlign: 'center', marginTop: '4px'}}>
            <img
            alt=""
            src={bell}
            width="60"
            height="60"
            className="d-inline-block" style={{marginRight: '10px'}}
            />
          </div>
					<Typography component="h1" variant="h5" textAlign={'center'}>
						Sign Up
					</Typography>
					<AddEditUserForm isSignup={true} setCurrentPage={setIsSignedUp}/>
				</Container>
		</ThemeProvider>
	);
}
