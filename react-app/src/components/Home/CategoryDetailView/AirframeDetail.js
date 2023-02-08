import React from 'react';
import { useNavigate } from 'react-router';
import useLocalStorage from '../../../hooks/useLocalStorage';
import CustomButton from '../../../ui/CustomButton';
import Navbars from '../Navbars';
import Footer from '../Footer';
import airframe from "../../image/airframe.png";


const AirframeDetail = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useLocalStorage("user");
  const handleClick = () => {
    if (authUser) {
      navigate("/interactive-tutorial/airframe/overview");
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
            <h3>Trades: Air Frame</h3>
          </div>
        </div>
        {/* content here */}
        <div className="row">
          <div className="col-12 col-sm-10 offset-sm-1 my-5">
            <p style={{textAlign: "justify"}}>The Bell helicopter is a twin engine helicopter designer for high performance, 
              low maintenance and maximum utility. It is manufactured by Bell Helicopter Textorn Incorporation,
               United States of America.</p><br/>
            <p style={{textAlign: "justify"}}>Bangladesh Air Force purchased Bell Helicopter in 1977 to carry BAF personnel,
               load mission, patient mission, VIP and VVIP mission. 
               Initially the major inspection (Overhauling) after operating 1000 hrs
                used to be done in abroad i e. in Singapore. In 1986 a contract was made
                 in between Bangladesh Air Force and the then Heli Orient Pte 
                 Limited to train BAF personnel and to establish facilities for 1000 hrs
                  (Bell-212) and 1200 hrs (Bell-206L series). In Oct' 1986 started
                   overhaul of helicopters i the name of bell tech project by the Heli
                    Orient expert & technician of BAF. After completion of 04X Bell-212
                     & 01X Bell 206 L series hel, BAF started overhauling by own
                      tech man power in the name of 208 Maintenance Unit (MU) in Sep'1988.</p><br/>
            <img src={airframe} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "60%"}} /><br/>

            <h3>Role of 208 MU, BAF</h3>
            <br/>
            <ol>
              <li>3rd line servicing of Bell hel</li>
              <li>Structural repair of damaged hel/ac</li>
              <li>Exploring local resources to repair component</li>
              <li>Providing general engineering support to other hel/ac</li>
              <li>Painting & write up of other hel/ac</li>
            </ol>
            
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
}

export default AirframeDetail