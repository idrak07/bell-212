import React from 'react';
import Footer from './Footer';
import Historymessage from './Historymessage';
import Navbars from './Navbars';

const MessageDetails = () => {
    return (
        <div>
            <Navbars></Navbars>
           {/*<ImgOverlayExample></ImgOverlayExample>  
           <Footer></Footer> */}
           <br/>
           <Historymessage></Historymessage>
           <br/>
           {/* <ImgOverlayExample></ImgOverlayExample>
           <br/> */}
           <Footer></Footer>
        </div>
    );
};

export default MessageDetails;