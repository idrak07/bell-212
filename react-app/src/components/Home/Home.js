import React from 'react';
import Coursecategory from './Coursecategory';
import Footer from './Footer';
import Gallery from './Gallery';
import Historymessage from './Historymessage';
import HomeCarousel from './HomeCarousel';
import Navbars from './Navbars';


const Home = () => {
    return (
        <>
           <Navbars></Navbars>
           <HomeCarousel></HomeCarousel>
           <br/><br/>
           <Historymessage></Historymessage>
           <br/><br/>
           <Coursecategory></Coursecategory>
           <br/><br/>
           <Gallery/>
           <Footer></Footer>
        </>
    );
};

export default Home;