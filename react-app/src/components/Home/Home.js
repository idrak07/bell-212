import React from 'react';
import HomeCarousel from './HomeCarousel';
import Coursecategory from './Coursecategory';
import Historymessage from './Historymessage';
import Navbars from './Navbars';
import Footer from './Footer'
import Gallery from './Gallery';


const Home = () => {
    return (
        <div>
           <Navbars></Navbars>
           <HomeCarousel></HomeCarousel>
           <br/><br/>
           <Historymessage></Historymessage>
           <br/><br/>
           <Coursecategory></Coursecategory>
           <br/><br/>
           <Gallery/>
           <Footer></Footer>
        </div>
    );
};

export default Home;