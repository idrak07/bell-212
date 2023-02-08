import React from "react";
import { useNavigate } from "react-router";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CustomButton from "../../../ui/CustomButton";
import Navbars from "../Navbars";
import Footer from '../Footer';
import instruments from "../../image/instruments.png";

const InstrumentDetail = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useLocalStorage("user");
  const handleClick = () => {
    if (authUser) {
      navigate("/interactive-tutorial/instruments/overview");
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
            <h3>Trades: Instruments</h3>
          </div>
        </div>
        {/* content here */}
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 my-5">
            <p style={{textAlign: "justify"}}>Instrument is a device which can record and indicate various
parameters and reading of particular system. Instrument is four types:</p><br/>
            <ul>
              <li>Flight instrument.</li>
              <li>Eng propulsion & Hyd instrument</li>
              <li>Navigation Instrument.</li>
              <li>Miscellaneous Instrument.</li>
            </ul>

            <img src={instruments} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "50%"}} /><br/>
            
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

export default InstrumentDetail;
