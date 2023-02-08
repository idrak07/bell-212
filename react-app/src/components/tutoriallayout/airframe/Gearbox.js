import React, { useState } from "react";
import ThreeDTabs from "../../pages/InteractiveTutorial/ThreeDTabs/TheeDTabs";
import { StlViewer } from "react-stl-viewer";
import view from "./models/gearbox0.STL";
import view1 from "./models/gearbox1.STL";
import view2 from "./models/gearbox2.STL";
import view3 from "./models/gearbox3.STL";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const style = {
  top: 0,
  left: 0,
  width: "50vw",
  height: "50vh",
};
const Gearbox = () => {
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
       <h4 class="ui header">Intermediate gear box (42 degree)</h4>
       <p>
          This component is used to transmit the power taken from the
          transmission to the tail rotor gearbox through the tail
          rotor driveshaft by changing the direction of route to 42
          degree as the vertical fin is attached on tail boom at 42
          degree. In this gear box RPM remains the same i.e 4300 which
          was taken from transmission.
       </p>
       <h4 class="ui header">
          Tail rotor gearbox (90 degree gearbox)
       </h4>
       <p>
          This component is installed on the top of vertical fin. The
          output RPM of 4300 from the 42 degree gearbox enter into the
          90 degree gearbox and it’s output provides reduced RPM to
          1660. The tail rotor hub and blade assembly is installed on
          the output shaft of tail rotor gearbox, so the tail rotor
          hub and blade assembly also rotate at 1660 RPM.
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
            <figcaption class="figure-caption">3D model- 1</figcaption>
          </div>

          <div class="border px-auto  my-5" style={style}>
            <StlViewer style={style} orbitControls shadows url={view1} />
            <figcaption class="figure-caption">3D model- 2</figcaption>
          </div>

          <div class="border px-auto  my-5" style={style}>
            <StlViewer style={style} orbitControls shadows url={view2} />
            <figcaption class="figure-caption">3D model- 3</figcaption>
          </div>

          <div class="border px-auto  my-5" style={style}>
            <StlViewer style={style} orbitControls shadows url={view3} />
            <figcaption class="figure-caption">3D model- 4</figcaption>
          </div>
          
        </div>
      </div>
    </div>
  );


  return (
    <div>
      <div class="ui basic padded segment exra">
        <ThreeDTabs
          tabs={["Gearbox System", "3D Model"]}
          normalComp={<NormalComp />}
          threeDComp={<ThreeDComp />}
        />
      </div>
    </div>
  );
};

export default Gearbox;
