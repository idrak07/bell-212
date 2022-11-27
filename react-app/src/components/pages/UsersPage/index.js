import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import UsersTable from "./UsersTable";

const UsersPage = () => {
  return (
    <AdminLayout>
      <div style={{
        padding: '18px',
        marginLeft: '15px',
        display: 'flex',
        flexDirection: 'column',
      }}>
    
        
        <UsersTable />
      </div>
    </AdminLayout>
  )
};

export default UsersPage;
