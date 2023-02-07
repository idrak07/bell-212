import React from 'react';
import {StlViewer} from "react-stl-viewer";
import compressor from '../models2/compressor.STL';
import ThreeDTabs from "../../pages/InteractiveTutorial/ThreeDTabs/TheeDTabs";

const style = {
    top: 0,
    left: 0,
    width: '50vw',
    height:'50vh',
}
const NormalComp = () => (
    <div class="ui bottom attached active basic tab segment" data-tab="first">
         <h1 class="ui header">Compressor Turbine</h1>
         <p>
            <strong>Purpose:</strong>
         </p>
         <p>
            Extract energy (66%) from the hot gases to drive the compressor rotor unit.
         </p>
         <p>
            <strong>Construction:</strong>
         </p>
         <p>
            The compressor turbine is a two-plane balanced disk assembly, the disk is
            made of nickel alloy steel with firtree serrations that provide a firm
            attachment as well as allowing for thermal expansion differences between
            the blades and the disk. Rivets are used to axially retain the 58 blades on
            the disk. A master spline ensures reinstallation of the compressor turbine
            in its initial position on the compressor stub shaft during maintenance.
         </p>
         <p>
            <strong>References:</strong>
         </p>
         <p>
            Maximum N1 speed :
         </p>
         <p>
            (PT6T-3) : ..................................100% (38,100 rpm)
         </p>
         <p>
            (PT6T-3B’s/-6’s) : ......................103.4% (39,400 rpm)
         </p>
         <p>
            (PT6T-3D’s) : .............................109.2% (41,600 rpm)
         </p>
         <p>
            Rotation ........................... CW viewed looking forward
         </p>
         <p>
            <strong>Operation:</strong>
         </p>
         <p>
            Expanding gases, accelerated through the vane ring hit the turbine blades.
            The energy available in the gases is converted into rotational movement to
            drive the compressor and the engine accessories. Nearly two thirds of all
            the energy available from the products of combustion is needed to drive the
            compressor. The one third remaining is used to drive the power turbine. The
            turbine is individually balanced on two planes with weights and rivets.
            This feature allows for turbine replacement in the field. The turbine disc
            is limited in cycles (refer to chapter Performance).
         </p>
         <p>
            <strong>Maintenance:</strong>
         </p>
         <p>
            <strong>During Hot Section Inspection:</strong>
         </p>
         <ul type="disc">
            <li>
               Inspect turbine disk for cracks, overheating, and scratches.
            </li>
         </ul>
         <p>
            <strong>POWER TURBINE VANE RING</strong>
         </p>
         <p>
            <strong>Purpose:</strong>
         </p>
         <p>
            Direct gases to the power turbine and change static pressure into velocity.
         </p>
         <p>
            <strong>Construction:</strong>
         </p>
         <ul type="disc">
            <li>
               Nickel alloy casting with a riveted sheet metal center baffle.
            </li>
            <li>
               The exit area (throat) of the vane ring is classified.
            </li>
            <li>
               Supported by the power turbine housing.
            </li>
            <li>
               A lug to slot arrangements centers and prevents movements of the vane
               ring.
            </li>
         </ul>
         <p>
            <strong>Operation:</strong>
         </p>
         <p>
            Gases leaving the compressor turbine are accelerated through the power
            turbine vane ring and cause the power turbine to rotate. The vane ring is
            held in place by lugs fitted in the power turbine housing. The riveted
            inner baffle directs air close to the power and compressor turbine disks
            for cooling. During engine assembly, selection of the correct vane ring
            class (area) will allow for optimization (matching) of the N1 and ITT
            parameters and engine performance.
         </p>
         <p>
            <strong>POWER TURBINE</strong>
         </p>
         <p>
            <strong>Purpose:</strong>
         </p>
         <p>
            Extract energy (33%) from the gases to drive the aircraft main rotor
            through the reduction gearbox.
         </p>
         <p>
            <strong>Construction:</strong>
         </p>
         <p>
            The power turbine is a single-plane balanced disk assembly, the disk is
            made of nickel alloy steel and is splined to the power turbine shaft. A
            master spline insures that the turbine can only fit in one position on the
            turbine shaft. The 41 blades are retained in the firtree serrations with
            rivets. There is no mechanical links between the power and compressor
            turbines thus the power turbine is "Free" to turn independent of the
            compressor turbine operation. Removal of the power turbine is permissible
            at field level
         </p>
         <p>
            if an operator wants to inspect the area beneath the turbine (ie : No. 3
            bearing cover pre SB 5222). Balancing of the power turbine must be done
            with the power turbine shaft and the No. 3 and 4 bearings altogether and
            for that reason the power turbine is not field replaceable.
         </p>
         <p>
            <strong>References:</strong>
         </p>
         <p>
            N2 at 100%................ 33,000 rpm
         </p>
         <p>
            Rotation .................... CCW viewed looking forward
         </p>
         <p>
            NR at 100% ............... 324 rpm
         </p>
         <p>
            The turbine disc is limited in cycles (refer to chapter
         </p>
         <p>
            Performance).
         </p>
         <p>
            <strong>Maintenance:</strong>
         </p>
         <p>
            <strong>Unscheduled</strong>
         </p>
         <p>
            During Hot Section Inspection:
         </p>
         <ul type="disc">
            <li>
               Inspect the turbine disk for cracks, overheating, scratches.
            </li>
            <li>
               Inspect the turbine blades for: cracks, burning, coating loss,
               corrosion, impact damage and blade shift.
            </li>
         </ul>
         <p>
            <strong>POWER TURBINE &amp; EXHAUST SECTION</strong>
         </p>
         <p>
            <strong>Exhaust Case:</strong>
         </p>
         <ul type="disc">
            <li>
               Single port case, direct the exhaust gases to ambient atmosphere.
            </li>
            <li>
               Welded assembly of nickel-steel alloy sheet metal.
            </li>
            <li>
               Ski jump helps to evacuate the exhaust gas.
            </li>
         </ul>
         <p>
            <strong>Power Turbine Stator Housing:</strong>
         </p>
         <ul type="disc">
            <li>
               Support: the power turbine vane ring, the integral ITT harness and
               thermocouple.
            </li>
            <li>
               Interface with the gas generator section via a seal ring.
            </li>
         </ul>
         <p>
            <strong>Insulation Blanket:</strong>
         </p>
         <ul type="disc">
            <li>
               Reduce heat transmission between the exhaust case and other internal
               components.
            </li>
         </ul>
         <p>
            <strong>Power Turbine Shaft Housing:</strong>
         </p>
         <ul type="disc">
            <li>
               Support the power turbine shaft.
            </li>
            <li>
               Form a cavity for No. 3 and 4 bearings.
            </li>
         </ul>
         <p>
            <strong>Power Turbine Shaft:</strong>
         </p>
         <ul type="disc">
            <li>
               Supported by No. 3 and 4 bearings.
            </li>
            <li>
               Transmit power turbine speed and torque to the reduction gearbox via
               the RGB input shaft coupling.
            </li>
         </ul>
         <p>
            <strong>Maintenance:</strong>
         </p>
         <p>
            <strong>Scheduled:</strong>
         </p>
         <ul type="disc">
            <li>
               Pre SB 5222 only (PT6T-3/3B/6): No. 3 bearing cover inspection.
            </li>
            <li>
               Visually inspect exhaust duct for cracks and/or distortion every 50
               hours or 6 months.
            </li>
         </ul>
         <p>
            <strong>Unscheduled:</strong>
         </p>
         <ul type="disc">
            <li>
               Stop drill cracks on the exhaust flange (mating flange with the
               airframe) if crack does not extend into the seam weld.
            </li>
         </ul>
      </div>
);

const ThreeDComp = () => (
    <div class="ui bottom attached basic tab segment" data-tab="second">
         <p align="middle">
            [Mouse Click to rotate, Scroll to zoom in and out, Shift + Click to move the model]
         </p>
         <StlViewer
            style={style}
            orbitControls
            shadows
            url={compressor}
            />
      </div>
);


const Tirbine1 = () => {
    return (
        <div>
            <div class="ui basic padded segment exra">
                <ThreeDTabs
                tabs={["Compressor Turbine", "3D Model"]}
                normalComp={<NormalComp />}
                threeDComp={<ThreeDComp />}
                />
            </div>
        </div>
    );
};

export default Tirbine1;