import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Ui from './components/DashboardUi/Ui';
import Home from './components/Home/Home';
import AuthSetting from './components/Login/AuthSetting';
import Tutoriallayout from './components/tutoriallayout/Tutoriallayout';
import Basicturbo1 from './components/tutoriallayout/engine/Basicturbo1';
import Cold from './components/tutoriallayout/engine/Cold';
import Hot from './components/tutoriallayout/engine/Hot';
import Turbine from './components/tutoriallayout/engine/Turbine';
import Oil from './components/tutoriallayout/engine/Oil';
import Try from './components/tutoriallayout/engine/Try';
import Airframe from './components/tutoriallayout/airframe/Airframe';
import States from './components/tutoriallayout/airframe/States';
import Process from './components/tutoriallayout/airframe/Process';
import Publication from './components/tutoriallayout/airframe/Publication';
import Worthiness from './components/tutoriallayout/airframe/Worthiness';
import Schedule from './components/tutoriallayout/airframe/Schedule';
import Rotor from './components/tutoriallayout/airframe/Rotor';
import Data from './components/tutoriallayout/airframe/Data';
import Tail from './components/tutoriallayout/airframe/Tail';
import Train from './components/tutoriallayout/airframe/Train';
import Gearbox from './components/tutoriallayout/airframe/Gearbox';  
import Transmission from './components/tutoriallayout/airframe/Transmission';
import Elecoveriew from './components/tutoriallayout/electriccomp/Elecoveriew';
import Nite from './components/tutoriallayout/electriccomp/Nite';
import Miss from './components/tutoriallayout/electriccomp/Miss';
import Inte from './components/tutoriallayout/electriccomp/Inte';
import Hoist from './components/tutoriallayout/electriccomp/Hoist';
import Heat from './components/tutoriallayout/electriccomp/Heat';
import Fcontrol from './components/tutoriallayout/electriccomp/Fcontrol';
import Ext from './components/tutoriallayout/electriccomp/Ext';
import Econtrol from './components/tutoriallayout/electriccomp/Econtrol';
import Dc from './components/tutoriallayout/electriccomp/Dc';
import Bus from './components/tutoriallayout/electriccomp/Bus';
import Air from './components/tutoriallayout/electriccomp/Air';
import Ac from './components/tutoriallayout/electriccomp/Ac';
import Warn from './components/tutoriallayout/electriccomp/Warn';
import Under from './components/tutoriallayout/electriccomp/Under';
import Power from './components/tutoriallayout/electriccomp/Power';
import Instover from './components/tutoriallayout/intruments/Instover';
import Engp from './components/tutoriallayout/intruments/Engp';
import Ffi from './components/tutoriallayout/intruments/Ffi';
import Finst from './components/tutoriallayout/intruments/Finst';
import Hydra from './components/tutoriallayout/intruments/Hydra';
import Missibt from './components/tutoriallayout/intruments/Missibt';
import Navinst from './components/tutoriallayout/intruments/Navinst';
import Radview from './components/tutoriallayout/radio/Radview';
import Adf from './components/tutoriallayout/radio/Adf';
import Adfr from './components/tutoriallayout/radio/Adfr';
import Atc from './components/tutoriallayout/radio/Atc';
import Dme from './components/tutoriallayout/radio/Dme';
import Elt from './components/tutoriallayout/radio/Elt';
import Eltart from './components/tutoriallayout/radio/Eltart';
import Gps from './components/tutoriallayout/radio/Gps';
import Hf from './components/tutoriallayout/radio/Hf';
import Hfr from './components/tutoriallayout/radio/Hfr';
import Homer from './components/tutoriallayout/radio/Homer';
import Inter from './components/tutoriallayout/radio/Inter';
import Mark from './components/tutoriallayout/radio/Mark';
import Radar from './components/tutoriallayout/radio/Radar';
import Vhf from './components/tutoriallayout/radio/Vhf';
import Vor from './components/tutoriallayout/radio/Vor';
import Weat from './components/tutoriallayout/radio/Weat';
import Weater from './components/tutoriallayout/radio/Weater';
import HistoryDetails from './components/Home/HistoryDetails';
import MessageDetails from './components/Home/MessageDetails';
import CategooryDetails from './components/Home/CategoryDetails';
import Customer from './components/screens/Customer';
import Profile from './components/screens/Profile';
import EngineQ from './components/Question/EngineQ';



function App() {
  return (
    <div class="wrapper">
  
       <BrowserRouter>

<Routes>
<Route path="/" element={<Home />} />     
<Route path="/dashboard" element={<Ui/>} />
<Route path="/historydetail" element={<HistoryDetails/>} />
<Route path="/messagedetail" element={<MessageDetails/>} />
<Route path="/categorydetail" element={<CategooryDetails/>} />
<Route path="/login" element={<SignIn/>} />
<Route path="/signup" element={<SignUp/>} />
<Route path="/auth" element={<AuthSetting />} />
<Route path="/layout" element={<Tutoriallayout/>} />
<Route path="/basic" element={<Basicturbo1/>}/>
<Route path="/cold" element={<Cold/>}/>
<Route path="/hot" element={<Hot/>}/>
<Route path="/turbine" element={<Turbine/>}/>
<Route path="/oil" element={<Oil/>}/>
<Route path="/overview" element={<Airframe/>}/>
<Route path="/states" element={<States/>}/>
<Route path="/process" element={<Process/>}/>
<Route path="/publication" element={<Publication/>}/>
<Route path="/Airworthiness" element={<Worthiness/>}/>
<Route path="/Schedule" element={<Schedule/>}/>
<Route path="/gdata" element={<Data/>}/>
<Route path="/mrotor" element={<Rotor/>}/>
  <Route path="/trotor" element={<Tail/>}/>
<Route path="/Transmission" element={<Transmission/>}/>
<Route path="/Gearbox" element={<Gearbox/>}/>
<Route path="/train" element={<Train/>}/>
<Route path="/elecoverview" element={<Elecoveriew/>}/>
<Route path="/powersupply" element={<Power/>}/>
<Route path="/dcpowersupply" element={<Dc/>}/>
<Route path="/acpowersupply" element={<Ac/>}/>
<Route path="/busarng" element={<Bus/>}/>
<Route path="/intlight" element={<Inte/>}/>
<Route path="/extlight" element={<Ext/>}/>
<Route path="/caution" element={<Warn/>}/>
<Route path="/enginecontrol" element={<Econtrol/>}/>
<Route path="/flightcontrol" element={<Fcontrol/>}/>
<Route path="/heating" element={<Heat/>}/>
<Route path="/miss" element={<Miss/>}/>
<Route path="/aircond" element={<Air/>}/>
<Route path="/undersiling" element={<Under/>}/>
<Route path="/hoisting" element={<Hoist/>}/>
<Route path="/nite" element={<Nite/>}/>
<Route path="/instoverview" element={<Instover/>}/>
<Route path="/finst" element={<Finst/>}/>
<Route path="/navinst" element={<Navinst/>}/>
<Route path="/engp" element={<Engp/>}/>
<Route path="/ffi" element={<Ffi/>}/>
<Route path="/hydra" element={<Hydra/>}/>
<Route path="/radoverview" element={<Radview/>}/>
<Route path="/inter" element={<Inter/>}/>
<Route path="/vhf" element={<Vhf/>}/>
<Route path="/hf" element={<Hf/>}/>
<Route path="/hfr" element={<Hfr/>}/>
<Route path="/adf" element={<Adf/>}/>
<Route path="/adfr" element={<Adfr/>}/>
<Route path="/vor" element={<Vor/>}/>
<Route path="/mark" element={<Mark/>}/>
<Route path="/atc" element={<Atc/>}/>
<Route path="/dme" element={<Dme/>}/>
<Route path="/elt" element={<Elt/>}/>
<Route path="/eltart" element={<Eltart/>}/>
<Route path="/homer" element={<Homer/>}/>
<Route path="/radar" element={<Radar/>}/>
<Route path="/weat" element={<Weat/>}/>
<Route path="/weater" element={<Weater/>}/>
<Route path="/gps" element={<Gps/>}/>
<Route path="/qn" element={<Customer/>}/>
<Route path="/eq" element={<EngineQ/>}/>
<Route path="/profile" element={<Profile/>}/>
 {/* <Route path="/try" element={<Try/>}/>  */}
</Routes>

</BrowserRouter>
 
    </div>
  );
}

export default App;
