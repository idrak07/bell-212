import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { SERVER_URL } from '../../../constants';
import useFetch from '../../../hooks/useFetch';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { convertMsToDate } from '../../../util';
import AdminLayout from '../../layouts/AdminLayout';
import AddEditUserForm from '../UsersPage/AddUserPage/AddEditUserForm';

const ProfilePage = () => {
  const [authenticatedUser, setAuthenticatedUser] = useLocalStorage('user');
  
  const { id } = authenticatedUser
  const [{ response, error, isLoading }, doFetch] = useFetch(
    `${SERVER_URL}/users/${id}`
  );

  useEffect(() => {
    doFetch({
      method: "GET",
    });
    console.log(response);
  }, []);
  return (
    <AdminLayout>

      <div style={{
        padding: '18px',
        marginLeft: '15px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '1rem'
        }}>
          <Typography
            variant="h5"
            id="tableTitle"
            component="div"
          >
            Profile
          </Typography>
        </div>

        {isLoading ? (
          "Loading profile data.."
        ) : error ? (
          "Error getting profile data"
        ) : response && (
          <AddEditUserForm isEdit={true} isProfileView={authenticatedUser.authority !== 'ROLE_ADMIN'} editData={{
            ...response, dob: new Date(convertMsToDate(response.dob)).toISOString().slice(0, 10)
          }} />
        )}
      </div>
    </AdminLayout>
  )
}

export default ProfilePage;
