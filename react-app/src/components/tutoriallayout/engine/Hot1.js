import React from 'react';
import {StlViewer} from "react-stl-viewer";
import hot from '../models2/hot.STL'
import Try from './Try';
const style = {
    top: 0,
    left: 0,
    width: '50vw',
    height:'50vh',
}

const Hot1 = () => {
    return (
        <div>
           <div class="ui basic padded segment exra">

<div class="ui top attached pointing secondary menu">
  <a class="active item" data-tab="first">Hot Section</a>
  <a class="item" data-tab="second">3D Model</a>
</div>
<div class="ui bottom attached active basic tab segment" data-tab="first">
  <h1 class="ui header">Hot Section</h1>
<p>
    <strong>Purpose:</strong>
</p>
<p>
    Extract energy from the hot expanding gases to:
</p>
<ul type="disc">
    <li>
        Drive the compressor turbine
    </li>
    <li>
        Drive the power turbine and the reduction gearbox
    </li>
</ul>
<p>
    <strong>Topics Covered in this Chapter:</strong>
</p>
<ul type="disc">
    <li>
        Combustion chamber
    </li>
    <li>
        Compressor turbine vane ring
    </li>
    <li>
        Compressor turbine
    </li>
    <li>
        Power turbine vane ring
    </li>
    <li>
        Power turbine
    </li>
    <li>
        Exhaust duct
    </li>
    <li>
        Sealing of the hot section
    </li>
    <li>
        Compressor turbine wash
    </li>
</ul>
<p>
    <strong>Operation:</strong>
</p>
<p>
    The hot section of the engine comprises of components downstream of the gas
    generator. Hot expanding gases leaving the combustion chamber are directed
    towards the compressor turbine vane ring and hit the compressor turbine
    blades. The energy extracted by the compressor turbine will drive the
    compressor and the Accessory
</p>
<p>
    Gearbox. Thereafter, gases travel across the power turbine vane ring and
    hit the power turbine blades. The power turbine rotation is transmitted to
    the output shaft via the power turbine shaft and the reduction gearbox.
    Gases leaving the power turbine are expelled to the atmosphere through the
    exhaust duct.
</p>
<p>
    <strong>COMBUSTION CHAMBER LINER</strong>
</p>
<p>
    <strong>Purpose:</strong>
</p>
<p>
    Provide an area for combustion of the fuel/air mixture. The reverse flow
    feature provides for a shorter and lighter engine.
</p>
<p>
    <strong>Construction:</strong>
</p>
<ul type="disc">
    <li>
        Annular, reverse flow type combustion chamber made of nickel alloy
        sheet metal
    </li>
    <li>
        14 fuel nozzle adapter bosses
    </li>
    <li>
        2 spark igniter bosses
    </li>
    <li>
        Cooling rings maintain a layer of cooling air to protect the combustion
        chamber walls from the flame
    </li>
    <li>
        On PT6T-3D’s power section, the small exit duct is an integral part of
        the liner and it is covered with ceramic coating as thermal barrier.
    </li>
</ul>
<p>
    <strong>Operation:</strong>
</p>
<p>
    P3 air enters the combustion chamber through holes in the inner and outer
    liner walls. The shape, size and location of these holes provide the
    correct fuel/air ratio for all operating conditions. The combustion chamber
    combined with the large and small exit ducts form an envelope that turns
    the gas 180° (reverse flow). This configuration permits location of the
    turbines closer to the compressor and within the combustion chamber area,
    thus making the engine shorter and lighter. Cooling rings direct P3 air
    into the combustion chamber, close to the walls, to form a flame barrier.
</p>
<p>
    <strong>Maintenance:</strong>
</p>
<p>
    <strong>Unscheduled</strong>
</p>
<ul type="disc">
    <li>
        Borescope inspection through fuel nozzle bosses.
    </li>
</ul>
<p>
    <strong>During Hot Section Inspection:</strong>
</p>
<ul type="disc">
    <li>
        Inspect Liner for evidence of burning, cracking, buckling, etc.
    </li>
    <li>
        Regap cooling rings if they are distorted.
    </li>
    <li>
        Some damage is acceptable.
    </li>
</ul>

</div>
<div class="ui bottom attached basic tab segment" data-tab="second">
  <p align="middle">
    [Mouse Click to rotate, Scroll to zoom in and out, Shift + Click to move the model]</p>
    <StlViewer
            style={style}
            orbitControls
            shadows
            url={hot}
        />
        {/* <Try></Try> */}
            
</div>
  

</div>  
        </div>
    );
};

export default Hot1;