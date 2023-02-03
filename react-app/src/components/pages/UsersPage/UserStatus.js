import React, { useState } from "react";
import { toast } from "react-toastify";
import { SERVER_URL } from "../../../constants";
import useFetch from "../../../hooks/useFetch";
import CustomSwitch from "../../../ui/CustomSwitch";

export const UserStatus = ({ user, setShouldRefetchUser }) => {
  const [isChecked, setIsChecked] = useState(user?.activated);
   const [{ response, error, isLoading }, editUserStatus] = useFetch(
    `${SERVER_URL}/users`
  );


  const updateUserStatus = async () => {
    try {
      const res = await editUserStatus({
        method: "PUT",
        mode: "cors",
        data: {
          ...user,
          activated: !user?.activated
        },
      });

      toast.success('User Status Updated')
      setShouldRefetchUser(true)
    } catch {
      toast.error("Couldn't update user status")
    }
  }

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    updateUserStatus()
  }


  
  return (
    <>
      <CustomSwitch checked={isChecked} onChange={handleChange} />
    </>
  );
};
