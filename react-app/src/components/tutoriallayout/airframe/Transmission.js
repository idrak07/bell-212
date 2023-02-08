import React, { useState } from "react";
import ThreeDTabs from "../../pages/InteractiveTutorial/ThreeDTabs/TheeDTabs";
import { StlViewer } from "react-stl-viewer";
import view from "./models/xmission0.STL";
import view1 from "./models/xmission1.STL";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const style = {
  top: 0,
  left: 0,
  width: "50vw",
  height: "50vh",
};

  const NormalComp = () => (
    <div
      class="ui bottom attached active basic tab segment"
      data-tab="first" className="px-5"
      >
      <h4 class="ui header">Transmission Assembly</h4>
      <p>
          This component is used to transmit power from the engine
          through the main driveshaft to drive the main rotor, tail
          rotor and all other accessory driven components. It is
          located in front of engine on structural support. It
          consists of top case, ring gear case, support case, main
          case and accessory sump case. Inside the transmission
          assembly main input quill, bevel gear, accessory drive
          quill, lower planetary gear, lower sun gear, upper sun gear,
          upper planetary gear, mast adapter, hydraulic pump quill,
          techo generator quill, transmission pump quill and tail
          rotor drive quill.
      </p>
      <h4 class="ui header">Transmission Oil System</h4>
      <p>
          Specified oil is used for lubricating the transmission
          assembly. Transmission sump case is used as the oil
          reservoir and two oil level gauge one indicates low level
          another indicates full level are located at the right side
          of the sump case. A geared pump and an internal filter are
          also located inside the sump case. When the transmission
          runs the pump also runs and it’s pressure range is 0-70 PSI.
          The pump pressure enter the internal filter and from the
          filter goes to bypass valve. When oil temperature is 54
          degree centigrade or below the bypass valve will be will be
          fully opened and oil will go to the external filter without
          going to the cooler. When the oil temperature rises above 54
          degree centigrade but bellow 79 degree centigrade the bypass
          valve will be partially opened and some portion of oil will
          go to cooler. When oil temperature rises above 79 degree
          centigrade, the bypass valve will be fully closed and oil
          will go to cooler. From the cooler oil will go to external
          filter then to the oil pressure manifold from where oil will
          go to different jets to lubricate the different gears and
          bearings. During rotation of different gears and bearings if
          any teeth of gears or any bearing is damaged then there are
          three chip detector to indicate the metal chip.
      </p>
      <h4 class="ui header">Mast Assembly</h4>
      <p>
          The mast assembly is installed on the transmission mast
          adapter to transmit power with reduced RPM of 324 to the
          main rotor hub & blade assembly and to rotate with the same
          RPM.
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
          
        </div>
      </div>
    </div>
);

const Transmission = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [page, setPage] = useState(1);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div class="ui basic padded segment exra">
        <ThreeDTabs
          tabs={["Transmission System", "3D Model"]}
          normalComp={<NormalComp />}
          threeDComp={<ThreeDComp />}
        />
      </div>
    </div>
  );
};

export default Transmission;
