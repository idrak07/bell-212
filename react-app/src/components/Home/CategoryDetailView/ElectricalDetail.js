import React from "react";
import { useNavigate } from "react-router";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CustomButton from "../../../ui/CustomButton";
import Navbars from "../Navbars";
import Footer from '../Footer';
import elec from "../../image/elec.png";

const ElectricalDetail = () => {
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
            <h3>Trades: Electrical</h3>
          </div>
        </div>
        {/* content here */}
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 my-5">
            <p style={{textAlign: "justify"}}>The Electric components that present in the Bell-212 :</p><br/>
            <ul>
              <li>DC Power supply system</li>
              <li>AC Power supply system</li>
              <li>Bus arrangements</li>
              <li>Interior lighting system</li>
              <li>Exterior lighting system</li>
              <li>Caution & Warning system</li>
              <li>Engine Control & Accessories system</li>
              <li>Heating system</li>
              <li>Miscellaneous electrical system</li>
              <li>Air conditioning system</li>
              <li>Rescue hoisting system</li>
              <li>under sling system</li>
              <li>Nite-sun</li>
            </ul>

            <img src={elec} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "60%"}} /><br/>
            
          </div>
          <div className="row">
            {/* learn more button */}
            <div className="col-12 col-sm-10 offset-sm-1 my-5">
              <CustomButton onClick={handleClick}>
                Learn More
              </CustomButton>
            </div>
          </div>
        </div>
        <br />
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ElectricalDetail;
