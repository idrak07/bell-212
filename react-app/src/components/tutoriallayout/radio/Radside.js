import React, { useState, Component, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Radside = () => {

  return (
    <div>
      
        
              <br />
              <h4>Contents</h4>
              <br />
              <ListGroup>
                <ListGroup.Item action variant="success">
                  <Link to="/radoverview">Overview</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                  <Link to="/inter">INTERCOM SYS : A-301-6W</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link to="/vhf">VHF R/T : KTR-908</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="primary">
                  <Link to="/hf">HF R/T: ASB-850</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="dark">
                  <Link to="/hfr">HF R/T : KHF-950</Link>
                </ListGroup.Item>

                <ListGroup.Item action variant="success">
                  <Link to="/adf">ADF RXR : KDF-8000</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/adfr">ADF RXR : KDF-806</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/vor">VOR/NAV RXR : KNR-634</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/mark">MARKER BEACON</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/atc">ATC TRANSPONDER : KXP-756</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/dme">DME : KDM-706</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/elt">ELT POITER : P-3000</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/eltart">ELT ARTEX 406</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/homer">VHF HOMER CHELTON 2000</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/radar">RADAR ALTIMETER : KRA-405</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/weat">WEATHER RADAR : PRIMUS-700</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/weater">WEATHER RADAR : RDR-2000</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/gps">GPS : 165 TSO</Link>
                </ListGroup.Item>
              </ListGroup>
    </div>
  );
};

export default Radside;
