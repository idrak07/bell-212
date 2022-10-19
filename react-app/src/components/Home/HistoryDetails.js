import React from 'react';
import Navbars from './Navbars';
import Footer from './Footer'
import Historymessage from './Historymessage';
import ImgOverlayExample from './ImgOverlayExample';

const HistoryDetails = () => {
    return (
        <div>
           <Navbars></Navbars>  
           <br/>
           <Historymessage></Historymessage>
           <br/>
           {/* <ImgOverlayExample></ImgOverlayExample>
           <br/> */}
           <Footer></Footer>
        </div>
    );
};

export default HistoryDetails;