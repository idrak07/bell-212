import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const ElecSidebar = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/overview" 
          >
            Overview
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/powersupply"
          >
            Power Supply System
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/dcpowersupply"
          >
            DC Power Supply System
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/acpowersupply"
          >
            AC Power Supply System
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/busarng"
          >
            Bus Arrangements
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/intlight"
          >
            Interior Lighting System
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
          className="text-secondary"
            to="/interactive-tutorial/electric-components/extlight"
          >
            Exterior Lighting System
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/caution"
          >
            Caution & light System
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/enginecontrol"
          >
            Engine Control & Accessories System
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/flightcontrol"
          >
            Flight Control System
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/heating"
          >
            Heating System
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/miss"
          >
            Miscellaneous Electrical System
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/aircond"
          >
            Air-conditioning System
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/undersiling"
          >
            Under Sling system
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/hoisting"
          >
            Hoisting System
          </Link>
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          <Link  style={{display: "block", textDecoration: "none"}}
            className="text-secondary"
            to="/interactive-tutorial/electric-components/nite"
          >
            Nite-sun SX-16
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ElecSidebar;
