import React from 'react';
import {StlViewer} from "react-stl-viewer";
import engine1 from './images/engine1.png'
import oil from '../models2/oil0.STL'



const style = {
    top: 0,
    left: 0,
    width: '50vw',
    height:'50vh',
}

const Oil1 = () => {

 
    return (
        <div>
           <div class="ui basic padded segment exra">

<div class="ui top attached pointing secondary menu">
  <a class="active item" data-tab="first">Oil System</a>
  <a class="item" data-tab="second">3D Models</a>
</div>
<div class="ui bottom attached active basic tab segment" data-tab="first">
  <h1 class="ui header">Oil Systems</h1>
<p>
    <strong>Pressure System</strong>
</p>
<p>
    The power section oil pump, located inside the accessory gearbox, takes the oil at the bottom of the integral oil tank. Oil from the pump holds open the check valve to allow oil flow through two external pressure lines. The oil is directed to the oil/fuel heater and to the airframe mounted oil cooler. The check valve cavity is opened to the pressure-regulating valve. The oil going to the oil/fuel heater is returned to the oil tank via the pressure-adjusting valve. The oil returning from the cooler is sent to the oil filter then to various locations inside the engine. A check valve set at 40 Psi prevent oil to flow to the Nos. 3 and 4 bearing cavity during start and shut-down to prevent flooding of the bearing cavity. A pressure-regulating valve (PRV) housed in the combined check and regulating valve assembly mounted on the bottom of the accessory gearbox, controls the oil pressure. When the sensing line pressure from oil system exceeds a pre-set value, the regulating valve is moved against spring pressure to open a port and allow excess pressure oil to flow back to the main oil tank. Oil flow to the engine is, therefore, limited to actual demand rather than full pressure pump capacity. To provide a more accessible pressure adjustment, a valve is mounted at the top of the accessory gearbox.
</p>
<img src={engine1} alt="Oil System"/>
<p>The valve consists of a variable orifice, which bleeds pressure oil from the fuel heater line into the oil tank.</p>

<p>
    <strong>Scavenge System</strong>
</p>
<p>
    The scavenge system consists of three gear type pumps and one ejector pump. Two pumps are located inside the accessory gearbox, one is mounted externally at the front of the accessory gearbox. The ejector pump is located inside the Nos. 3 and 4 support housing. Oil from the power turbine cavity (Nos. 3 and 4 bearings) is scavenged into the input section of the reduction gearbox by the ejector pump. Oil from the input section of the reduction gearbox is then scavenged through a screen mesh by a gear-type pump and returned to the oil tank. A gear-type pump into the accessory gearbox scavenges oil from No. 2 bearing cavity. Above 50% N1 rpm, the air pressure in No. 2 bearing cavity is sufficient to pressure scavenge the oil through the ball-type bypass valve. No.1 bearing cavity is gravity drained into the accessory gearbox. Oil in the accessory gearbox is finally scavenged through a screen by a gear-type pump and returned to the oil tank.
</p>

</div>
<div class="ui bottom attached basic tab segment" data-tab="second">
  <p align="middle">[Mouse Click to rotate, Scroll to zoom in and out, Shift + Click to move the model]</p>
  <StlViewer
            style={style}
            orbitControls
            shadows
            url={oil}
        />
</div>
</div>   
        </div>
    );
};

export default Oil1;