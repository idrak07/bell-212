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
            <Col xs={12} >

              <div class="ui basic padded segment exra px-5">
                <h1 class="ui header mt-3 mb-5">
                  Process in percentage of overhauling job
                </h1>

                <h4>Steps</h4>
                <ol class="ui list">
                  <li className="mb-3" style={{textAlign: "justify"}}>
                    After engine preservation run all trades starts disassemble
                    the helicopter. individual trade will remove their trade
                    concerning components and items which will cover 11% of the
                    overhauling job.
                  </li>
                  <li className="mb-3" style={{textAlign: "justify"}}>
                    All removed components, items and helicopter structure after
                    cleaning will be further disassembled and inspected. During
                    inspection a list of required spare parts will be prepared
                    for the repair or replacement during reassembly. A demand of
                    spare parts which were listed during inspection will be
                    placed to Air Hqs for procurement from abroad and local
                    market. This will complete 29% of overhauling job.
                  </li>
                  <li className="mb-3" style={{textAlign: "justify"}}>
                    With the available spare parts in stock and after receiving
                    demanded spare parts repair, replacement and reassembly will
                    be completed. Which cover 64% of overhauling job.
                  </li>
                  <li className="mb-3" style={{textAlign: "justify"}}>
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
                  <li className="mb-3" style={{textAlign: "justify"}}>
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
