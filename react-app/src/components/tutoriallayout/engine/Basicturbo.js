import React from "react";
import { StlViewer } from "react-stl-viewer";
import ThreeDTabs from "../../pages/InteractiveTutorial/ThreeDTabs/TheeDTabs";
import one from "../models2/engine.STL";
import engine0 from "./images/engine0.png";

const style = {
  top: 0,
  left: 0,
  width: "50vw",
  height: "50vh",
};

const NormalComp = () => (
  <div class="ui bottom attached active basic tab segment" data-tab="first">
    <h1 class="ui header">Basic Turboshaft Operation</h1>
    <p>
      The PT6T (Twin-Pac) engine series is a lightweight free turbine engine. It
      drives one output shaft via a two-stage reduction gearbox. The power
      section consists of two major assemblies:
    </p>
    <ul>
      <li>The Compressor rotor assembly</li>
      <li>The Power Turbine rotor assembly</li>
    </ul>
    <img src={engine0} alt="Fuel Consumption" />
    <p>
      The Compressor Rotor assembly has a compressor and a compressor turbine.
      The Power Turbine rotor assembly has a power turbine and a power turbine
      shaft. The two assemblies are not connected together. They turn at
      different speeds and in opposite directions. This design is referred to as
      a "Free Turbine Engine". It permits the power turbine and the rotor to
      turn at a constant speed, while the fuel control system schedules any
      compressor speed (N1) as necessary. Starter cranking torque is low, since
      only the compressor rotor rotates on start. Engaging the accessory gearbox
      mounted starter/generator starts the Power Section. The compressor pulls
      air in the engine via an annular plenum chamber (inlet case). The pressure
      increases across 3 axial stages and one centrifugal impeller. The air is
      directed into the combustion chamber. Air enters the combustion chamber
      via small holes and at the proper compressor speed, the fuel is sprayed in
      the combustion chamber by 14 fuel nozzles. Two spark igniters located in
      the combustion chamber ignite the airfuel mixture. The generated hot gases
      are then directed to the turbine area. At this point, ignition is turned
      off since a continuous flame exists in the combustion chamber. The hot
      expanding gases accelerate through the compressor turbine vane ring and
      cause the compressor turbine to rotate. The gases leaving the compressor
      turbine are accelerated again as they flow through the power turbine vane
      ring. The power turbine provides rotational energy to drive the main rotor
      via the reduction gear train. Gases leaving the power turbine are expelled
      into the atmosphere by the exhaust duct. The reduction gearbox reduces the
      power turbine speed to a suitable speed for the aircraft gear train (6,600
      rpm). The engine oil supply is contained in three integral oil tanks,
      which provide oil to lubricate and cool all bearings and gears. A
      hydro-pneumatic fuel control system installed on the Accessory Gearbox
      regulates fuel flow to the fuel nozzles in response to power requirements
      and flight conditions.
    </p>
    <p>
      The fuel system controls the main rotor speed by varying the engine's
      output power as a function of the load demand set by the pilot. Engine
      shutdown is accomplished by cutting the fuel going to the fuel nozzles.
    </p>
  </div>
);

const ThreeDComp = () => (
  <>
    <p>
      [Mouse Click to rotate, Scroll to zoom in and out, Shift + Click to move
      the model]
    </p>
    <StlViewer style={style} orbitControls shadows url={one} />
  </>
);

const Basicturbo = () => {
  return (
    <div>
      <div class="ui basic padded segment exra">
        <ThreeDTabs
          tabs={["Turboshaft Operations", "3D Model"]}
          normalComp={<NormalComp />}
          threeDComp={<ThreeDComp />}
        />
        {/* <div class="ui top attached pointing secondary menu">
          <a class="active item" data-tab="first">
            Turboshaft Operations
          </a>
          <a class="item" data-tab="second">
            3D Model
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Basicturbo;
