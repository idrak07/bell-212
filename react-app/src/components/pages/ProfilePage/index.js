import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import AdminLayout from '../../layouts/AdminLayout';
import ProfileForm from './ProfileForm';

const ProfilePage = () => {
  const navigate = useNavigate();
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

        <ProfileForm />
      </div>
    </AdminLayout>
  )
}

export default ProfilePage;
