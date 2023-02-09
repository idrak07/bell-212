import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { SERVER_URL } from "../../../constants";
import AdminLayout from "../../layouts/AdminLayout";
import UsersTable from "./UsersTable";

const UsersPage = () => {
  const [shouldRefetchUser, setShouldRefetchUser] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);
  const location = useLocation();

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/users`);
      const data = await res.data;
      setResponse(data);
    } catch (e) {
      alert("Error getting users");
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [shouldRefetchUser, setShouldRefetchUser, location.pathname]);

  return (
    <AdminLayout>
      <div
        style={{
          padding: "18px",
          marginLeft: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isLoading ? (
          "Loading users.."
        ) : error ? (
          "Error getting users"
        ) : response && response?.length === 0 ? (
          <div>
            <p>No users found</p>
          </div>
        ) : (
          <UsersTable allUsers={response} setShouldRefetchUser={setShouldRefetchUser} />
        )}
      </div>
    </AdminLayout>
  );
};

export default UsersPage;
