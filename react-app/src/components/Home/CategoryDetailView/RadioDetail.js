import React from "react";
import { useNavigate } from "react-router";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CustomButton from "../../../ui/CustomButton";
import Navbars from "../Navbars";
import radio from "../../image/radio1.png";
import Footer from '../Footer';

const RadioDetail = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useLocalStorage("user");
  const handleClick = () => {
    if (authUser) {
      navigate("/radoverview");
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
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 my-5">
            <p>The Radio Communication part is covered by these components:</p>
            <ul>
              <li>INTERCOM SYS : A-301-6W</li>
              <li>VHF R/T : KTR-908</li>
              <li>HF R/T: ASB-850</li>
              <li>HF R/T : KHF-950</li>
              <li>ADF RXR : KDF-8000</li>
              <li>ADF RXR : KDF-806</li>
              <li>VOR/NAV RXR : KNR-634</li>
              <li>ATC TRANSPONDER : KXP-756</li>
              <li>DME : KDM-706</li>
              <li>ELT POITER : P-3000</li>
              <li>ELT ARTEX 406</li>
              <li>VHF HOMER CHELTON 2000</li>
              <li>RADAR ALTIMETER : KRA-405</li>
              <li>WEATHER RADAR : PRIMUS-700</li>
              <li>WEATHER RADAR : RDR-2000</li>
              <li>GPS : 165 TSO</li>
            </ul>
            <img src={radio} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "60%"}}/>
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

export default RadioDetail;