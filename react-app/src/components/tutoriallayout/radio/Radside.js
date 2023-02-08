import React, { useState, Component, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Radside = () => {
return (
<div>
   <ListGroup>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/overview">Overview</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/inter">INTERCOM SYS : A-301-6W</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/vhf">VHF R/T : KTR-908</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/hf">HF R/T: ASB-850</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/hfr">HF R/T : KHF-950</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/adf">ADF RXR : KDF-8000</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/adfr">ADF RXR : KDF-806</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/vor">VOR/NAV RXR : KNR-634</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/mark">MARKER BEACON</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/atc">ATC TRANSPONDER : KXP-756</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/dme">DME : KDM-706</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/elt">ELT POITER : P-3000</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/eltart">ELT ARTEX 406</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/homer">VHF HOMER CHELTON 2000</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/radar">RADAR ALTIMETER : KRA-405</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/weat">WEATHER RADAR : PRIMUS-700</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/weater">WEATHER RADAR : RDR-2000</Link>
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
         <Link  style={{display: "block", textDecoration: "none"}}
         className="text-secondary" to="/interactive-tutorial/radio/gps">GPS : 165 TSO</Link>
      </ListGroup.Item>
   </ListGroup>
</div>
);
};
export default Radside;