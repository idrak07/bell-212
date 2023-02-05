import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Process = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      {/* <Navlay></Navlay> */}
      <div>
        <Container>
          <Row>
            {/* <Col xs={6} md={4}>
              <br />
              <h4>Contents</h4>
              <br />
              <ListGroup>
                <ListGroup.Item action variant="secondary">
                  <Box sx={{ minWidth: 70 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Introduction to Airframe
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>
                          <Link to="/overview">Overview</Link>
                        </MenuItem>
                        <MenuItem value={20}>
                          <Link to="/States">States of Overhauling</Link>
                        </MenuItem>
                        <MenuItem value={30}>
                          <Link to="/process">Process of Overhauling</Link>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/publication">Publication</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                  <Link to="/Airworthiness">Airworthiness</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link to="/Schedule">Components Overhaul Schedule</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="primary">
                  <Link to="/gdata">General Data</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="dark">
                  <Link to="/mrotor"> Main Rotor</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                  <Link to="/trotor">Tail Rotor</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                  <Link to="/Transmission">Transmission Assembly</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                  <Link to="/Gearbox">Gearbox</Link>
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                  <Link to="/train">Power Train</Link>
                </ListGroup.Item>
              </ListGroup>
            </Col> */}
            <Col xs={12} >
              {/* <br />
              <br />
              <br />
              <br /> */}

              <div class="ui basic padded segment exra">
                <h1 class="ui header">
                  Process in percentage of overhauling job
                </h1>

                <h4>Steps</h4>
                <ol class="ui list">
                  <li>
                    After engine preservation run all trades starts disassemble
                    the helicopter. individual trade will remove their trade
                    concerning components and items which will cover 11% of the
                    overhauling job.
                  </li>
                  <li>
                    All removed components, items and helicopter structure after
                    cleaning will be further disassembled and inspected. During
                    inspection a list of required spare parts will be prepared
                    for the repair or replacement during reassembly. A demand of
                    spare parts which were listed during inspection will be
                    placed to Air Hqs for procurement from abroad and local
                    market. This will complete 29% of overhauling job.
                  </li>
                  <li>
                    With the available spare parts in stock and after receiving
                    demanded spare parts repair, replacement and reassembly will
                    be completed. Which cover 64% of overhauling job.
                  </li>
                  <li>
                    All reassembled components, items will be installed in
                    helicopter, control system rigging of airframe and engine
                    will be carried out, ground hydraulic test for flight
                    control will be carried out, electrical- instrument and
                    radio power check will be carried out. After installation of
                    all doors and access panels helicopter weight and balance is
                    carried out. Finally helicopter will be declared for
                    airworthiness check by the operator. This will cover 95% of
                    overhauling job.
                  </li>
                  <li>
                    After completion of airworthiness check and de-preservation
                    run the helicopter will be declared for ground run and
                    functional test flight. A successful test flight will be
                    100% completion of overhauling of a helicopter.
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

export default Process;
