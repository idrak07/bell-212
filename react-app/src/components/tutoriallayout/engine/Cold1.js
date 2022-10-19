import React from 'react';
import {StlViewer} from "react-stl-viewer";
import two from '../models2/cold.STL'

const style = {
    top: 0,
    left: 0,
    width: '50vw',
    height: '50vh',
}
const Cold1 = () => {
    return (
        <div>
          <div class="ui basic padded segment exra">

<div class="ui top attached pointing secondary menu">
  <a class="active item" data-tab="first">Cold Section</a>
  <a class="item" data-tab="second">3D Model</a>
</div>
<div class="ui bottom attached active basic tab segment" data-tab="first">
  <h1 class="ui header">Cold Section</h1>
  <p>
    <strong>Function:</strong>
</p>
<p>
    Supply the necessary mass of air at the right pressure to the combustion
    chamber and all the supporting systems. Transmit the rotational energy from
    the compressor turbine to drive the accessories mounted on the accessory
    gearbox.
</p>
<p>
    <strong>Topics Covered in this Chapter:</strong>
</p>
<ul type="disc">
    <li>
        Inlet case
    </li>
    <li>
        Compressor assembly
    </li>
    <li>
        Bleed valve
    </li>
    <li>
        Gas generator case
    </li>
    <li>
        Cold section cleaning
    </li>
</ul>
<p>
    <strong>Operation:</strong>
</p>
<p>
    The compressor draws air into the engine and compresses it, before delivery
    to the combustion chamber area.
</p>
<p>
    <strong>Compressed Air:</strong>
</p>
<ul type="disc">
    <li>
        Sustains combustion in order to produce the energy necessary to drive
        the compressor and the power turbines.
    </li>
    <li>
        Provides cooling air for hot section components.
    </li>
    <li>
        Provides air to seal bearing cavities.
    </li>
    <li>
        Assists in the operation of the fuel control unit.
    </li>
    <li>
        Controls bleed valve operation.
    </li>
    <li>
        Provides heating for cabin use.
    </li>
</ul>

<p>
    <strong>COMPRESSOR AND INLET CASE</strong>
</p>
<p>
    <strong>Function:</strong>
</p>
<p>
    <strong>Inlet Case</strong>
</p>
<ul type="disc">
    <li>
        Directs air into the compressor
    </li>
    <li>
        Supports No. 1 bearing
    </li>
</ul>
<p>
    <strong>Compressor</strong>
</p>
<ul type="disc">
    <li>
        Provides the combustion chamber with the correct airflow at the
        required pressure.
    </li>
</ul>
<p>
    <strong>References:</strong>
</p>
<p>
    Compression ratio : ....................... 7.3 : 1
</p>
<p>
    Maximum airflow (Wa) :................. 6.60 lbs/sec
</p>
<p>
    Maximum N1 speed :
</p>
<p>
    (PT6T-3) : ...................................... 100% (38,100 rpm)
</p>
<p>
    (PT6T-3B’s/-6’s) : .......................... 103.4% (39,400 rpm)
</p>
<p>
    (PT6T-3D’s) : ................................. 109.2% (41,600 rpm)
</p>
<p>
    <strong>Construction:</strong>
</p>
<p>
    <strong>Inlet case</strong>
</p>
<ul type="disc">
    <li>
        One piece aluminum casting protected against corrosion.
    </li>
    <li>
        Anti-ice protection by heat from oil tank.
    </li>
    <li>
        Inlet screen (1/4 inch mesh) prevents objects from entering the
        compressor.
    </li>
</ul>
<p>
    <strong>Compressor</strong>
</p>
<ul type="disc">
    <li>
        Three stages of axial rotors consisting of bladed disks, separated by
        stator vanes (1st stage Titanium blades, 2nd and 3rd stages,
        stainless-steel blades).
    </li>
    <li>
        One stage centrifugal consisting of a centrifugal impeller (Titanium).
    </li>
    <li>
        All the rotating components are held in place with tie rods that extend
        through the four stages.
    </li>
    <li>
        The No 1 bearing flexible housing absorbs compressor rotor vibrations.
    </li>
    <li>
        The compressor discs and the impeller are limited in cycles (refer to
        chapter Performance).
    </li>
</ul>
<p>
    <strong>Maintenance:</strong>
</p>
<p>
    <strong>Scheduled</strong>
</p>
<ul type="disc">
    <li>
        Check compressor inlet area for corrosion, dirt deposits and erosion
and check first-stage blades and vanes        <strong>every 300 hours or 1 year </strong>and whenever condition of
        inlet screen warrants its removal.
    </li>
    <li>
        Inspect inlet screen cleanliness and condition of mesh and rubber
        sealing rims for damage <strong>every 150 hours.</strong>
    </li>
    <li>
        Wash / rinse compressor at regular intervals.
    </li>
</ul>
<p>
    <strong>GAS GENERATOR CASE</strong>
</p>
<p>
    <strong>Purpose:</strong>
</p>
<p>
    Houses and supports various engine components. The diffuser pipes change
    the high velocity pressure into static pressure and cause the compressor
    air to turn 90°.
</p>
<p>
    <strong>Construction:</strong>
</p>
<ul type="disc">
    <li>
        Welded assembly of steel alloy machine parts and sheet metal with an
        aluminide corrosion resistant coating.
    </li>
    <li>
        21 brazed diffuser pipes.
    </li>
</ul>
<p>
    The case provides:
</p>
<ul type="disc">
    <li>
        Support for the compressor stator parts
    </li>
    <li>
        Support for the No. 2 bearing
    </li>
    <li>
        14 bosses for fuel nozzles
    </li>
    <li>
        2 bosses for igniter plugs
    </li>
    <li>
        2 bosses for drain valves
    </li>
    <li>
        1 boss for P3 air (to Automatic Fuel Control Unit)
    </li>
    <li>
        1 boss for P3 air (to clutch gear carbon seals)
    </li>
    <li>
        1 boss for P3 air (airframe bleed)
    </li>
    <li>
        1 boss for the ITT harness
    </li>
</ul>
<p>
    Two drain valves are provided on the gas generator case to drain fuel from
    the combustion chamber in the event of a false start or following power
    section shutdown.
</p>
<p>
    <strong>Maintenance Scheduled</strong>
</p>
<ul type="disc">
    <li>
        Verify drain valve for security and leaks at each engine periodic
        inspection.
    </li>
    <li>
        Inspect gas generator case for cracks (around fuel nozzles, ports and
        spot welds), distortion, corrosion and evidence of overheating every
        150 hours or 6 months.
    </li>
    <li>
        For Pre-SB 5239 only (PT6T-3/3B), Longitudinal seam welds inspection
        every 600 hours (no inspection if post SB and all helical weld
        configuration).
    </li>
</ul>
<p>
    <strong>Unscheduled</strong>
</p>
<ul type="disc">
    <li>
        Cleaning and touch-up of protective coating.
    </li>
    <li>
        Repair of fuel nozzle pad threads using "Keensert" inserts.
    </li>
    <li>
        During HSI, visually inspect case and diffuser pipes for wear and
        cracks.
    </li>
    <li>
        Replacement of shanknuts.
    </li>
</ul>

</div>
<div class="ui bottom attached basic tab segment" data-tab="second">
<p> [Mouse Click to rotate, Scroll to zoom in and out, Shift + Click to move the model]</p>
<StlViewer
            style={style}
            orbitControls
            shadows
            url={two}
        />
</div>
  

</div>    
        </div>
    );
};

export default Cold1;