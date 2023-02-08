import React, { useState } from "react";
import { StlViewer } from "react-stl-viewer";
import view from "./models/rotor0.STL";
import view1 from "./models/rotor1.STL";
import view2 from "./models/rotor2.STL";
import view3 from "./models/rotor3.STL";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import ThreeDTabs from "../../pages/InteractiveTutorial/ThreeDTabs/TheeDTabs";

const style = {
  top: 0,
  left: 0,
  width: "50vw",
  height: "50vh",
};
const Rotor = () => {
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
          Main rotor system is used to move the helicopter to forward,
          backward, sidewise, upward & downward. It consists of main
          rotor hub assembly- two grips with two pitch horn, yoke with
          Trunnion & pillow blocks, stabilizer bar, swash plate
          assembly, collective sleeve & scissors assembly, two tension
          torsion strap, two adjustable drag brace and two main rotor
          blades assembly.
      </p>
      <p style={{textAlign: "justify", lineHeight: "30px"}}>
          The Swash plate& support assembly along with collective
          sleeve & scissors assembly are installed on the transmission
          assembly over the mast.The trunnion is attached with yoke
          assembly in conjunction with two pillow blocks to allow the
          main rotor to flap.Two tension torsion straps are installed
          inside two spindles of the yoke to counteract the
          aerodynamic forces which tend to change the blade pitch
          angle. Two main rotor grips with two horns are installed on
          both sides of the yoke spindles to install two main rotor
          blades. Two drag brace assemblies are installed at the
          trailing edge of the blade for blades alignment.After main
          rotor blade and hub assembly alignment & balancing it is
          installed on the mast assembly above the swash plate.
          Non-rotating part of the swash plate is connected with two
          hydraulic actuator (cyclic controls) and collective lever
          with collective hydraulic actuator. Stabilizer bar is
          assembly is installed over the yoke with the trunnion for
          better stability at all flight attitudes. Both pitch links
          are attached with both pitch horns and both control tubes
          attached with both scissors assembly.
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
            <figcaption class="figure-caption">3D model - 1</figcaption>
          </div>

          <div class="border px-auto  my-5" style={style}>
            <StlViewer style={style} orbitControls shadows url={view1} />
            <figcaption class="figure-caption">3D model - 2</figcaption>
          </div>
          
          <div class="border px-auto my-5" style={style}>
            <StlViewer style={style} orbitControls shadows url={view2} />
            <figcaption class="figure-caption">3D model - 3</figcaption>
          </div>
          
          <div class="border px-auto  my-5" style={style}>
            <StlViewer style={style} orbitControls shadows url={view3} />
            <figcaption class="figure-caption">3D model - 4</figcaption>
          </div>
          
        </div>
      </div>
    </div>
  );


  return (
    <div>
      <div class="ui basic padded segment exra">
        <ThreeDTabs
          tabs={["Main Rotor System", "3D Model"]}
          normalComp={<NormalComp />}
          threeDComp={<ThreeDComp />}
        />
      </div>
    </div>
  );
};

export default Rotor;
