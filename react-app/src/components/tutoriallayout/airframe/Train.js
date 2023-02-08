import React, { useState } from "react";
import ThreeDTabs from "../../pages/InteractiveTutorial/ThreeDTabs/TheeDTabs";
import { StlViewer } from "react-stl-viewer";
import view from "./models/power0.STL";
import view1 from "./models/power1.STL";

import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const style = {
  top: 0,
  left: 0,
  width: "50vw",
  height: "50vh",
};
const Train = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [page, setPage] = useState(1);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const NormalComp = () => (
    <div
       class="ui bottom attached active basic tab segment"
       data-tab="first"
       >
       <p>
          To operate the Bell 212 Helicopter, twin engine is used as
          the power source. The twin engine power is combined in
          combining gearbox (CGB) it also called reduction gearbox
          (RGB). From the CGB output shaft (6600 RPM) the power is
          transmitted to transmission through the main driveshaft to
          the transmission input quill (input drive gear). Inside the
          transmission the input drive gear is attached with bevel
          gear(attached with vertical shaft) where reduction takes
          place 2.138: l ratio ie 6600 RPM to 3087 RPM and this is the
          first stage reduction. With vertical shaft upper side lower
          sun gear is attached and lower planetary gear is attached
          with it and reduction takes place 3.087:1 ie 3087 RPM to
          1000 RPM and this is the 2nd stage reduction. Lower
          planetary gear upper side is attached with upper sun gear
          upper side is attached with upper planetary gear where
          reduction takes place 3.087:1 ie 1000 RPM to 324 RPM and
          this is the 3rd stage reduction. Mast adapter is attached
          with upper planetary gear and the mast is installed on the
          mast adapter. Main Rotor hub and blade assembly is installed
          on the mast upper side. So, when the mast rotates the main
          rotor also rotate at 324 RPM. The total reduction from
          engine to main rotor is 20.37:1 ie 6600 RPM to 324 RPM.
       </p>
       <p>
          Again, in the sump case (transmission lower side) tail rotor
          drive gear is installed which rotates at 4300 RPM. Tail
          rotor driveshaft are installed with tail rotor drive gear
          which are also rotate at 4300 RPM transmit the power to the
          tail rotor gearbox input quill through intermediate gear box
          (42 degree gear box). Tail rotor gearbox output shaft RPM is
          1660 RPMie reduction ratio is 2.59:1. The tail rotor hub and
          blade assembly is installed on output shaft of tail rotor
          gearbox. So, tail rotor rotate at 1660 RPM and the total
          reduction is 3.975:1 ie 6600 RPM to 1660 RPM.
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

  return (
    <div>
      <div class="ui basic padded segment exra">
        <ThreeDTabs
          tabs={["Power train", "3D Model"]}
          normalComp={<NormalComp />}
          threeDComp={<ThreeDComp />}
        />
      </div>
    </div>
  );
};

export default Train;
