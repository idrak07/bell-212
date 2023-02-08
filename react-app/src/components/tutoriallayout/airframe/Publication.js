import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const style = {
  top: 0,
  left: 0,
  width: "50vw",
  height: "50vh",
};

const Publication = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col xs={12}>

              <div class="ui basic padded segment exra px-5">
                <h1 class="ui header mt-3 mb-5">
                  Publications & Bulletin Of Bell- 212 Helicopter
                </h1>

                <p>
                  Different Manuals & Bulletins are used during maintenance of
                  helicopter provided by the manufacturer. Following are the
                  manuals and bulletins.
                </p>

                <ol class="ui list">
                  <li className="mb-3" style={{textAlign: "justify"}}>
                    Maintainance Manual (MM): It contains the following-
                    <ul>
                      <li className="mt-3 mb-3" style={{textAlign: "justify"}}>
                        Index of chapter with subject and revision chapter.
                      </li>
                      <li className="mb-3" style={{textAlign: "justify"}}>
                        List of mandatory airworthiness limited life components.
                      </li>
                      <li className="mb-3" style={{textAlign: "justify"}}>
                        Scheduled inspection after operating helicopter
                        (Hours/Calender)
                      </li>
                      <li className="mb-3" style={{textAlign: "justify"}}>
                        List of components to be overhauled (Hours/Calender)
                      </li>
                      <li className="mb-3" style={{textAlign: "justify"}}>
                        Procedure of components removal, disassembly,
                        inspection, rectification, replacement of parts,
                        reassembly and reinstallation in the helicopter.
                      </li>
                      <li className="mb-3" style={{textAlign: "justify"}}>Trouble shooting of different defects.</li>
                    </ul>
                  </li>
                  <li className="mb-3" style={{textAlign: "justify"}}>
                    Component Repair & Overhaul Manual (CR&O): It provides the
                    procedure to disassembly, inspection, data(range) for repair
                    and reassembly of components.
                    <br />
                    <b>Note:</b> The chapter and the section are the same for
                    both maintenance manual and component repair & overhaul
                    manual.
                  </li>
                  <li className="mb-3" style={{textAlign: "justify"}}>
                    Ilustrated Parts Breakdown (IPB): It provides the part
                    number quantity of item required for maintenance, repair or
                    overhaul of helicopter components or single item including
                    hardware as per helicopter serial number.
                  </li>
                  <li className="mb-3" style={{textAlign: "justify"}}>
                    Aircraft Record (Log Book): This is used to enter helicopter
                    flying hrs, landings, major components replacement, ASB or
                    TB compliance and inspection carried out.
                  </li>
                  <li className="mb-3" style={{textAlign: "justify"}}>
                    Historical Service Record (Log Card): It is used for life or
                    major components to enter time since new, time since
                    overhaul, frequency of overhaul (Operating hrs/Calendar),
                    date & helicopter ser number installed and reason for
                    removal.
                  </li>
                  <li className="mb-3" style={{textAlign: "justify"}}>
                    Service Instruction (SI): This publication covers kits to be
                    installed on the aircraft which are not the part of basic
                    helicopter. The procedure for installation & removal, parts
                    breakdown, operation and maintenance are illustrated.
                  </li>
                  <li className="mb-3" style={{textAlign: "justify"}}>
                    Structural Repair Manual (SRM): This manual is used to
                    repair structure of helicopter.
                  </li>
                  <li className="mb-3" style={{textAlign: "justify"}}>
                    Bulletin-
                    <ul>
                      <li className="mb-3" style={{textAlign: "justify"}}>
                        Technical Bulletin (TB): This used to provide operators
                        with information of technical nature but does not affect
                        flight safety. The TB is optional for compliance.
                        Modifications to improve economy or facilitate
                        maintenance, substitution of interchangeable parts and
                        increase in time between inspection or overhaul and
                        increase of service or retirement life of component.
                      </li>
                      <li className="mb-3" style={{textAlign: "justify"}}>
                        Alert Service Bulletin (ASB): This is approved by safety
                        Board of Federal Aviation Administration (FAA) to notify
                        the Bell helicopter operators of safety matters. It is
                        mandatory and become inactive when it is complied and
                        included in maintenance Manual.
                      </li>
                      <li className="mb-3" style={{textAlign: "justify"}}>
                        Operation Safety Notice (OSN): This is used to advise
                        operators of safety condition that has come to
                        manufacturer attention. Normally, technical compliance
                        is not published. It is approved by Safety Board prior
                        to release.
                      </li>
                      <li className="mb-3" style={{textAlign: "justify"}}>
                        Information Letter (IL): This document deals with
                        non-technical in nature and inform the customer such as
                        warranty procedure, property return etc.
                      </li>
                    </ul>
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

export default Publication;
