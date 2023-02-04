import React from "react";
import { useNavigate } from "react-router";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CustomButton from "../../../ui/CustomButton";
import Navbars from "../Navbars";

const RadioDetail = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useLocalStorage("user");
  const handleClick = () => {
    if (authUser) {
      navigate("/dashboard");
    } else {
      navigate("/auth");
    }
  };
  return (
    <div>
      <Navbars></Navbars>
      <div className="container">
        {/* overview title here */}
        <div className="row justify-content-center">
          <div className="col-12 text-center my-5">
            <h3>Trades: Radio</h3>
          </div>
        </div>
        {/* content here */}
        <div>
            Content goes here
        </div>
        <br />
        {/* learn more button */}
        <div>
          <CustomButton onClick={handleClick}>
            Learn More
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default RadioDetail;