import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const States = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col xs={12} className="px-5">
              <div class="ui basic padded segment exra">
                <h1 class="ui header mt-3 mb-5">Stages of Helicopter Overhauling</h1>

                <p style={{textAlign: "justify"}}>
                  To complete the Overhauling of Bell 212 helicopter a total of
                  140 working days and total of 120 working days are required
                  for Bell 206L series helicopters. Different stages are being
                  followed during the Overhauling job. They are as follows.
                </p>
                <ol class="ui list mt-5">
                  <li className="mb-2" style={{textAlign: "justify"}}>
                    When Bell-212 helicopter completes near about 1000 hrs
                    flying and Bell 206L helicopter near about 1200 hrs, the
                    pilot along with the technicians of 208 MU will go for a
                    observation flight to note the instrument readings of engine
                    system, hydraulic system, fuel system and flight controls
                    behavior for future corrective action.
                  </li>
                  <li className="mb-2">
                    After landing a thorough inspection is carried out for any
                    leakage, any physical damage of structural of component or
                    panel and noted down.
                  </li>
                  <li>
                    Then, engine fuel system preservation run is carried out.
                  </li>
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default States;
