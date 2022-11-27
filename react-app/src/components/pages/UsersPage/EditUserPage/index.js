import { Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import CustomButton from '../../../../ui/CustomButton';
import AdminLayout from '../../../layouts/AdminLayout';
import AddEditUserForm from '../AddUserPage/AddEditUserForm';

const EditUserPage = () => {
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
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Edit User
          </Typography>
          <CustomButton
            style={{
              padding: '5px 14px'
            }} onClick={() => navigate('/users')}>
            Go Back
          </CustomButton>
        </div>

        <AddEditUserForm />
      </div>
    </AdminLayout>
  )
}

export default EditUserPage;

