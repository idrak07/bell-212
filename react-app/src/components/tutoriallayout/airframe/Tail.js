import React, { useState } from "react";
import ThreeDTabs from "../../pages/InteractiveTutorial/ThreeDTabs/TheeDTabs";
import { StlViewer } from "react-stl-viewer";
import view from "./models/tailrotor.STL";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const style = {
  top: 0,
  left: 0,
  width: "50vw",
  height: "50vh",
};
const Tail = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [page, setPage] = useState(1);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const NormalComp = () => (
    <div
      class="ui bottom attached active basic tab segment"
      data-tab="first" className="px-5"
      >
      <p style={{textAlign: "justify", lineHeight: "30px"}}>
          The tail rotor control system is used for directional
                    control ie turning to the left or to the right and it also
                    act as anti-torque control to counteract the main rotor
                    torque. It consists of tail rotor hub assembly, two tail
                    rotor blades, crosshead assembly with counter weights and
                    two pitch links.Two tail rotor blades are attached with tail
                    rotor hub assembly and installed on the tail rotor gearbox
                    output shaft. The crosshead assembly is installed on the TGB
                    output shaft over the tail rotor hub assembly and two pitch
                    links are attached with two pitch horns in the tail rotor
                    hub assembly.
      </p>
    </div>
  );

  const ThreeDComp = () => (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1 text-center">
          <p>
            [Mouse Click to rotate, Scroll to zoom in and out, Shift + Click to move
            the model]
          </p>
          <div class="border px-auto  my-5" style={style}>
            <StlViewer style={style} orbitControls shadows url={view} />
            <figcaption class="figure-caption">3D model</figcaption>
          </div>
          
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div class="ui basic padded segment exra">
        <ThreeDTabs
          tabs={["Tail Rotor System", "3D Model"]}
          normalComp={<NormalComp />}
          threeDComp={<ThreeDComp />}
        />
      </div>
    </div>
  );
};

export default Tail;
