import React from "react";
import { StlViewer } from "react-stl-viewer";
import view from "./models/bell212.stl";
import ThreeDTabs from "../../pages/InteractiveTutorial/ThreeDTabs/TheeDTabs";
const style = {
  top: 0,
  left: 0,
  width: "50vw",
  height: "50vh",
};

const Airframe = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const NormalComp = () => (
    <div class="ui bottom attached active basic tab segment px-5"
      data-tab="first"
      >
      <h1 class="ui header mt-3">Introduction to Airframe</h1>
      <p>
        The Bell helicopter is a twin engine helicopter designer for
        high performance, low maintenance and maximum utility. It is
        manufactured by Bell Helicopter Textorn Incorporation,
        United States of America.
      </p>
      <p>
        Bangladesh Air Force purchased Bell Helicopter in 1977 to
        carry BAF personnel, load mission, patient mission, VIP and
        VVIP mission. Initially the major inspection (Overhauling)
        after operating 1000 hrs used to be done in abroad i e. in
        Singapore. In 1986 a contract was made in between Bangladesh
        Air Force and the then Heli Orient Pte Limited to train BAF
        personnel and to establish facilities for 1000 hrs
        (Bell-212) and 1200 hrs (Bell-206L series). In Oct' 1986
        started overhaul of helicopters i the name of bell tech
        project by the Heli Orient expert & technician of BAF. After
        completion of 04X Bell-212 & 01X Bell 206 L series hel, BAF
        started overhauling by own tech man power in the name of 208
        Maintenance Unit (MU) in Sep'1988.{" "}
      </p>
      <h4>Role of 208 MU, BAF</h4>
      <ol class="ui list">
        <li>3rd line servicing of Bell hel.</li>
        <li>Structural repair of damaged hel/ac.</li>
        <li>Exploring local resources to repair component.</li>
        <li>
            Providing general engineering support to other hel/ac.
        </li>
        <li>Painting & write up of other hel/ac.</li>
      </ol>
    </div>
  );

  const ThreeDComp = () => (
    <>
      <p>
        [Mouse Click to rotate, Scroll to zoom in and out, Shift + Click to move
        the model]
      </p>
      <StlViewer style={style} orbitControls shadows url={view} />
    </>
  );
  return (
    <div>
      <div class="ui basic padded segment exra">
        <ThreeDTabs
          tabs={["Overview", "3D Model"]}
          normalComp={<NormalComp />}
          threeDComp={<ThreeDComp />}
        />
      </div>
    </div>
  );
};

export default Airframe;
