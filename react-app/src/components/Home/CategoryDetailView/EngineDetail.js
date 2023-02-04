import React from "react";
import { useNavigate } from "react-router";
import useLocalStorage from "../../../hooks/useLocalStorage";
import CustomButton from "../../../ui/CustomButton";
import Navbars from "../Navbars";
import engine from "../../image/engine0.png";
import Footer from '../Footer';


const EngineDetail = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useLocalStorage("user");
  const handleClick = () => {
    if (authUser) {
      navigate("/overview");
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
            <h3>Trades: Engine</h3>
          </div>
        </div>
        {/* content here */}
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 my-5">
            <p>The <b>Twin-Pac</b> is installed in the commercial Bell Helicopter / Agusta-Bell 212 and 412 or in the Sikorsky S58 T.<br/>The engine is secured in the aircraft by 4 engine mounts:</p>
            <ul>
              <li> 1 at the bottom of each accessory gearbox.</li>
              <li> 2 at the bottom of the reduction gearbox.</li>
            </ul><br/><br/>
            <h4>PT6T-3 TURBOSHAFT</h4><br/>
            <p>The <b>Twin-Pac</b> engine has 3 modules, 2 power section (PS) modules and 1 reduction gearbox (RGB) module.</p><br/>
            <h5>Main Components and Features</h5><br/>
            <h6>Accessory gearbox (AGB)</h6>
            <ul>
              <li>Support the engine accessories.</li>
              <li>Driven by the compressor rotor.</li>
            </ul><br/>
            <h6>Compressor</h6>
            <ul>
              <li>3 axial stages plus 1 centrifugal impeller.</li>
              <li>Supply the necessary air pressure and flow, for combustion and cooling of hot section components.</li>
            </ul><br/>
            <h6>Combustion Chamber</h6>
            <ul>
              <li>Annular, Reverse flow (for shorter and lighter engine).</li>
              <li>Area for the combustion of the air-fuel mixture.</li>
            </ul><br/>
            <h6>Compressor Turbine</h6>
            <ul>
              <li>Single stage turbine, turns clockwise (CW).</li>
              <li>Supply the power to drive the compressor.</li>
            </ul><br/>
            <h6>Power Turbine</h6>
            <ul>
              <li>Single stage turbine, turns counterclockwise (CCW).</li>
              <li>Independently of compressor turbine (free turbine).</li>
              <li>Extract the energy to supply necessary power to the aircraft main transmission.</li>
            </ul><br/>
            <h6>Reduction Gearbox (RGB)</h6>
            <ul>
              <li>Two stage reduction gearbox with idler gear.</li>
              <li>Built in torque measurement system.</li>
              <li>Reduce the power turbine speed to a speed satisfactory for the aircraft main transmission.</li>
              <li>Supply the power for two oil cooler blowers.</li>
              <li>Supply the power for two power turbine (N2) governors.</li>
            </ul><br/>
            <h6>Fuel and Control System</h6>
            <ul>
              <li>Separate and identical hydro-pneumatic fuel control systems for each power section.</li>
              <ul>
                <li>Two fuel heater</li>
                <li>Two fuel pump</li>
                <li>Two automatic fuel control unit (AFCU)</li>
                <li>Two manual fuel control unit (MFCU)</li>
                <li>Two N2 governor</li>
                <li>One common torque control unit (TCU)</li>
              </ul>
              <li>Two operating modes.</li>
              <ul>
                <li>Automatic (normal flight)</li>
                <li>Manual (Emergency, Troubleshooting)</li>
              </ul>
              <li>Governing function.</li>
              <li>Torque limiting.</li>
              <li>Torque sharing (except 412HP/EP and Post SB5267).</li>
            </ul>
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

export default EngineDetail;
