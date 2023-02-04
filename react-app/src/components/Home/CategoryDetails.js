import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import air from "../image/aircraft.jpg";
import airframe from "../image/airframe.png";
import engine from "../image/engine0.png";
import radio from "../image/radio.jpg";
import unit from "../image/unit.jpg";
import Footer from "./Footer";
import Navbars from "./Navbars";

const CategooryDetails = () => {
  return (
    <div>
      <Navbars></Navbars>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center my-5">
            <h1>Trades</h1>
          </div>
        </div>
        <CardGroup>
          <Card className="mx-2 card-hover">
            <Link
              to="/tradesdetail/engine" // preview link: overview
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card.Img variant="top" src={engine} />
              <Card.Body>
                <Card.Title>
                  <b>Engine</b>
                </Card.Title>
                <Card.Text className="py-2">
                  Engine Related tutorial will be found here
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card className="mx-2 card-hover">
            <Link
              to="/tradesdetail/airframe" // preview link: aircond"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card.Img variant="top" src={airframe} />
              <Card.Body>
                <Card.Title>
                  <b>Air Frame</b>
                </Card.Title>
                <Card.Text className="py-2">
                  Air Craft Related tutorial will be found here
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card className="mx-2 card-hover">
            <Link
              to="/tradesdetail/radio" // preview link: radoverview"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card.Img variant="top" src={radio} />
              <Card.Body>
                <Card.Title>
                  <b>Radio</b>
                </Card.Title>
                <Card.Text className="py-2">
                  Radio Related tutorial will be found here
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </CardGroup>
        <div className="row justify-content-center mt-5">
          <Card className="mx-2 col-4 card-hover">
            <Link
             to="/tradesdetail/electrical" // preview link: /elecoverview"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card.Img variant="top" src={air} />
              <Card.Body>
                <Card.Title>
                  <b>Electrical</b>
                </Card.Title>
                <Card.Text className="py-2">
                  Electrical Related tutorial will be found here
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
          <Card className="mx-2 col-4 card-hover">
            <Link
              to="/tradesdetail/instruments" // preview link: /instoverview"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card.Img variant="top" src={unit} />
              <Card.Body>
                <Card.Title>
                  <b>Instruments</b>
                </Card.Title>
                <Card.Text className="py-2">
                  Instruments Related tutorial will be found here
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CategooryDetails;
