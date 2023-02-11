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
                        <p>208 MU is one of the maintenance unit of Bangladesh Air Force. It is responsible for the following:</p>
                        <ul>
                            <li>Repair/overhaul of Bell series helicopter</li>
                            <li>Carry out 1000/1200 hours inspection of Bell series helicopter</li>
                            <li>Repair/overhaul of Bell series helicopter of sister services as per the directives of Bell series sevices helicopter.</li>
                            <li>Any other task given by Air HQ.</li>
                        </ul>
                    </div>
                </div>
                <div className='row my-5'>
                    <div className='col-8 offset-2 text-center'>
                    <img src={his1} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "100%"}}></img>
                    </div>
                </div>
                <div className='row my-5'>
                    <div className='col-8 offset-2 text-center'>
                    <img src={his1} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "100%"}}></img>
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