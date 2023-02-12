import React from 'react';
import Footer from './Footer';
import Navbars from './Navbars';
import his1 from './../image/his1.png';
import his2 from './../image/his2.png';

const HistoryDetails = () => {
    return (
        <div>
           <Navbars></Navbars>  
           <br/>
           {/* <Historymessage></Historymessage> */}
           <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center mb-5'>History</h1>
                        <p>208 Maintenance Unit (MU) of the Bangladesh Air Force is a vital unit responsible for ensuring the operational readiness of the Bell series helicopters. The unit plays a crucial role in maintaining the aircraft in a safe and reliable condition. Here's a more detailed description of its responsibilities:</p>
                        <ol>
                            <li>Repair and Overhaul of Bell Series Helicopters: The 208 MU is responsible for conducting repairs and overhauls of the Bell series helicopters, ensuring that they are operating at optimal performance levels. The unit has a team of experienced technicians who are trained to carry out various maintenance tasks, including mechanical, electrical and avionics repairs.</li>
                            <li>1000/1200 Hours Inspection of Bell Series Helicopters: The 208 MU also conducts 1000/1200 hours inspections of the Bell series helicopters, which are critical to maintaining their safety and reliability. These inspections are carried out in accordance with the manufacturer's guidelines and recommendations, and the results are analyzed to determine if any further maintenance is required.</li>
                            <li>Repair and Overhaul of Bell Series Helicopters for Sister Services: The 208 MU also provides repair and overhaul services for the Bell series helicopters of sister services, such as the Bangladesh Army, as directed by the Bell series services helicopter. This ensures that the aircraft of other services are also maintained to the highest standards, ensuring their safety and reliability.</li>
                            <li>Other Tasks as Directed by Air HQ: The 208 MU is also tasked with carrying out other maintenance-related tasks as directed by the Air Headquarters. These may include the maintenance and repair of other aircraft types, the maintenance of ground support equipment, or the provision of technical assistance to other units.</li>
                        </ol>
                        <p>
                        In conclusion, the 208 MU is a critical unit within the Bangladesh Air Force, playing a crucial role in ensuring the operational readiness of the Bell series helicopters and supporting the wider mission of the Air Force.
                        </p>
                    </div>
                </div>
                <div className='row my-5'>
                    <div className='col-8 offset-2 text-center'>
                    <img src={his1} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "100%"}}></img>
                    </div>
                </div>
                <div className='row my-5'>
                    <div className='col-8 offset-2 text-center'>
                    <img src={his2} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "100%"}}></img>
                    </div>
                </div>
           </div>
           <br/>
           {/* <ImgOverlayExample></ImgOverlayExample>
           <br/> */}
           <Footer></Footer>
        </div>
    );
};

export default HistoryDetails;