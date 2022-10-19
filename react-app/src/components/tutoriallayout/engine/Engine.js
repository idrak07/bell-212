import React from 'react';
import './Engine.css';

const Engine = () => {
    return (
        <div>
           <div class="ui basic padded segment exra">
    <h1 class="ui header">Engine System Overview</h1>
<p>
    The <strong>Twin-Pac</strong><strong>® </strong>is installed in the
    commercial Bell Helicopter / Agusta-Bell 212 and 412 or in the Sikorsky S58
    T. The engine is secured in the aircraft by 4 engine mounts:
</p>
<ul type="disc">
    <li>
        1 at the bottom of each accessory gearbox.
    </li>
    <li>
        2 at the bottom of the reduction gearbox.
    </li>
</ul>
<p>
    <strong>PT6T-3 TURBOSHAFT</strong>
</p>
<p>
    The <strong>Twin-Pac</strong> engine has 3 modules, 2 power section (PS)
    modules and 1 reduction gearbox (RGB) module.
</p>
<p>
    <strong>References:</strong>
</p>
<p>
    <strong>
        SHP :.................................................1,800 shp
    </strong>
</p>
<p>
    <strong>
        Length : ............................................66 inches
    </strong>
</p>
<p>
    <strong>
        Width : ..............................................44 inches
    </strong>
</p>
<p>
    <strong>
        Height : .............................................33 inches
    </strong>
</p>
<p>
    <strong>Dry Weight : .....................................690 lbs</strong>
</p>
<p>
    <strong>100% N1 speed ................................38,100 rpm</strong>
</p>
<p>
    <strong>100% N2 speed ................................33,000 rpm</strong>
</p>
<p>
    <strong>100% Output shaft (Ns) ...................6,600 rpm</strong>
</p>
<p>
    <strong></strong>
</p>
<p>
    <strong>Main Components and Features</strong>
</p>
<p>
    Accessory gearbox (AGB)
</p>
<ul type="disc">
    <li>
        Support the engine accessories.
    </li>
    <li>
        Driven by the compressor rotor.
    </li>
</ul>
<p>
    <strong></strong>
</p>
<p>
    <strong>Compressor</strong>
</p>
<ul type="disc">
    <li>
        3 axial stages plus 1 centrifugal impeller.
    </li>
    <li>
        Supply the necessary air pressure and flow, for combustion and cooling
        of hot section components.
    </li>
</ul>
<p>
    <strong>Combustion Chamber</strong>
</p>
<ul type="disc">
    <li>
        Annular, Reverse flow (for shorter and lighter engine).
    </li>
    <li>
        Area for the combustion of the air-fuel mixture.
    </li>
</ul>
<p>
    <strong>Compressor Turbine</strong>
</p>
<ul type="disc">
    <li>
        Single stage turbine, turns clockwise (CW).
    </li>
    <li>
        Supply the power to drive the compressor.
    </li>
</ul>
<p>
    <strong>Power Turbine</strong>
</p>
<ul type="disc">
    <li>
        Single stage turbine, turns counterclockwise (CCW).
    </li>
    <li>
        Independently of compressor turbine (free turbine).
    </li>
    <li>
        Extract the energy to supply necessary power to the aircraft main
        transmission.
    </li>
</ul>
<p>
    <strong>Reduction Gearbox (RGB)</strong>
</p>
<ul type="disc">
    <li>
        Two stage reduction gearbox with idler gear.
    </li>
    <li>
        Built in torque measurement system.
    </li>
    <li>
        Reduce the power turbine speed to a speed satisfactory for the aircraft
        main transmission.
    </li>
    <li>
        Supply the power for two oil cooler blowers.
    </li>
    <li>
        Supply the power for two power turbine (N2) governors.
    </li>
</ul>
<p>
    <strong></strong>
</p>
<p>
    <strong>Fuel and Control System</strong>
</p>
<ul type="disc">
    <li>
        Separate and identical hydro-pneumatic fuel control systems for each
        power section.
    </li>
    <ul type="circle">
        <li>
            Two fuel heater
        </li>
        <li>
            Two fuel pump
        </li>
        <li>
            Two automatic fuel control unit (AFCU)
        </li>
        <li>
            Two manual fuel control unit (MFCU)
        </li>
        <li>
            Two N2 governor
        </li>
        <li>
            One common torque control unit (TCU)
        </li>
    </ul>
    <li>
        Two operating modes
    </li>
    <ul type="circle">
        <li>
            Automatic (normal flight)
        </li>
        <li>
            Manual (Emergency, Troubleshooting)
        </li>
    </ul>
    <li>
        Governing function
    </li>
    <li>
        Torque limiting
    </li>
    <li>
        Torque sharing (except 412HP/EP and Post SB5267)
    </li>
</ul>

</div> 
        </div>
    );
};

export default Engine;