import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Ui from "./components/DashboardUi/Ui";
import CategooryDetails from "./components/Home/CategoryDetails";
import HistoryDetails from "./components/Home/HistoryDetails";
import Home from "./components/Home/Home";
import MessageDetails from "./components/Home/MessageDetails";
import AuthSetting from "./components/Login/AuthSetting";
import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";
import CreateQuizPage from "./components/pages/CreateQuizPage";
import EditQuizPage from "./components/pages/EditQuizPage";
import GiveTestPage from "./components/pages/GiveTestPage";
import LeaderBoardPage from "./components/pages/LeaderBoardPage";
import ProfilePage from "./components/pages/ProfilePage";
import QuizSettings from "./components/pages/QuizSettings";
import CreateQuizSettings from "./components/pages/QuizSettings/CreateQuizSettings";
import EditQuizSettings from "./components/pages/QuizSettings/EditQuizSettings";
import ShowAdminQuizPage from "./components/pages/ShowAdminQuizPage";
import TutorialPage from "./components/pages/TutorialPage";
import UserQuizLisPage from "./components/pages/UserQuizListPage";
import UsersPage from "./components/pages/UsersPage";
import AddUserPage from "./components/pages/UsersPage/AddUserPage";
import EditUserPage from "./components/pages/UsersPage/EditUserPage";
import Customer from "./components/screens/Customer";
import Airframe from "./components/tutoriallayout/airframe/Airframe";
import Data from "./components/tutoriallayout/airframe/Data";
import Gearbox from "./components/tutoriallayout/airframe/Gearbox";
import Process from "./components/tutoriallayout/airframe/Process";
import Publication from "./components/tutoriallayout/airframe/Publication";
import Rotor from "./components/tutoriallayout/airframe/Rotor";
import Schedule from "./components/tutoriallayout/airframe/Schedule";
import States from "./components/tutoriallayout/airframe/States";
import Tail from "./components/tutoriallayout/airframe/Tail";
import Train from "./components/tutoriallayout/airframe/Train";
import Transmission from "./components/tutoriallayout/airframe/Transmission";
import Worthiness from "./components/tutoriallayout/airframe/Worthiness";
import Ac from "./components/tutoriallayout/electriccomp/Ac";
import Air from "./components/tutoriallayout/electriccomp/Air";
import Bus from "./components/tutoriallayout/electriccomp/Bus";
import Dc from "./components/tutoriallayout/electriccomp/Dc";
import Econtrol from "./components/tutoriallayout/electriccomp/Econtrol";
import Elecoveriew from "./components/tutoriallayout/electriccomp/Elecoveriew";
import Ext from "./components/tutoriallayout/electriccomp/Ext";
import Fcontrol from "./components/tutoriallayout/electriccomp/Fcontrol";
import Heat from "./components/tutoriallayout/electriccomp/Heat";
import Hoist from "./components/tutoriallayout/electriccomp/Hoist";
import Inte from "./components/tutoriallayout/electriccomp/Inte";
import Miss from "./components/tutoriallayout/electriccomp/Miss";
import Nite from "./components/tutoriallayout/electriccomp/Nite";
import Power from "./components/tutoriallayout/electriccomp/Power";
import Under from "./components/tutoriallayout/electriccomp/Under";
import Warn from "./components/tutoriallayout/electriccomp/Warn";
import Basicturbo1 from "./components/tutoriallayout/engine/Basicturbo1";
import Cold from "./components/tutoriallayout/engine/Cold";
import Hot from "./components/tutoriallayout/engine/Hot";
import Oil from "./components/tutoriallayout/engine/Oil";
import Turbine from "./components/tutoriallayout/engine/Turbine";
import Engp from "./components/tutoriallayout/intruments/Engp";
import Ffi from "./components/tutoriallayout/intruments/Ffi";
import Finst from "./components/tutoriallayout/intruments/Finst";
import Hydra from "./components/tutoriallayout/intruments/Hydra";
import Instover from "./components/tutoriallayout/intruments/Instover";
import Navinst from "./components/tutoriallayout/intruments/Navinst";
import Adf from "./components/tutoriallayout/radio/Adf";
import Adfr from "./components/tutoriallayout/radio/Adfr";
import Atc from "./components/tutoriallayout/radio/Atc";
import Dme from "./components/tutoriallayout/radio/Dme";
import Elt from "./components/tutoriallayout/radio/Elt";
import Eltart from "./components/tutoriallayout/radio/Eltart";
import Gps from "./components/tutoriallayout/radio/Gps";
import Hf from "./components/tutoriallayout/radio/Hf";
import Hfr from "./components/tutoriallayout/radio/Hfr";
import Homer from "./components/tutoriallayout/radio/Homer";
import Inter from "./components/tutoriallayout/radio/Inter";
import Mark from "./components/tutoriallayout/radio/Mark";
import Radar from "./components/tutoriallayout/radio/Radar";
import Radview from "./components/tutoriallayout/radio/Radview";
import Vhf from "./components/tutoriallayout/radio/Vhf";
import Vor from "./components/tutoriallayout/radio/Vor";
import Weat from "./components/tutoriallayout/radio/Weat";
import Weater from "./components/tutoriallayout/radio/Weater";
import Tutoriallayout from "./components/tutoriallayout/Tutoriallayout";

function App() {
  return (
    <div class="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Ui />} />
          <Route path="/historydetail" element={<HistoryDetails />} />
          <Route path="/messagedetail" element={<MessageDetails />} />
          <Route path="/tradesdetail" element={<CategooryDetails />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth" element={<AuthSetting />} />
          <Route path="/layout" element={<Tutoriallayout />} />
          <Route path="/basic" element={<Basicturbo1 />} />
          <Route path="/cold" element={<Cold />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/turbine" element={<Turbine />} />
          <Route path="/oil" element={<Oil />} />
          <Route path="/overview" element={<Airframe />} />
          <Route path="/states" element={<States />} />
          <Route path="/process" element={<Process />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/Airworthiness" element={<Worthiness />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/gdata" element={<Data />} />
          <Route path="/mrotor" element={<Rotor />} />
          <Route path="/trotor" element={<Tail />} />
          <Route path="/Transmission" element={<Transmission />} />
          <Route path="/Gearbox" element={<Gearbox />} />
          <Route path="/train" element={<Train />} />
          <Route path="/elecoverview" element={<Elecoveriew />} />
          <Route path="/powersupply" element={<Power />} />
          <Route path="/dcpowersupply" element={<Dc />} />
          <Route path="/acpowersupply" element={<Ac />} />
          <Route path="/busarng" element={<Bus />} />
          <Route path="/intlight" element={<Inte />} />
          <Route path="/extlight" element={<Ext />} />
          <Route path="/caution" element={<Warn />} />
          <Route path="/enginecontrol" element={<Econtrol />} />
          <Route path="/flightcontrol" element={<Fcontrol />} />
          <Route path="/heating" element={<Heat />} />
          <Route path="/miss" element={<Miss />} />
          <Route path="/aircond" element={<Air />} />
          <Route path="/undersiling" element={<Under />} />
          <Route path="/hoisting" element={<Hoist />} />
          <Route path="/nite" element={<Nite />} />
          <Route path="/instoverview" element={<Instover />} />
          <Route path="/finst" element={<Finst />} />
          <Route path="/navinst" element={<Navinst />} />
          <Route path="/engp" element={<Engp />} />
          <Route path="/ffi" element={<Ffi />} />
          <Route path="/hydra" element={<Hydra />} />
          <Route path="/radoverview" element={<Radview />} />
          <Route path="/inter" element={<Inter />} />
          <Route path="/vhf" element={<Vhf />} />
          <Route path="/hf" element={<Hf />} />
          <Route path="/hfr" element={<Hfr />} />
          <Route path="/adf" element={<Adf />} />
          <Route path="/adfr" element={<Adfr />} />
          <Route path="/vor" element={<Vor />} />
          <Route path="/mark" element={<Mark />} />
          <Route path="/atc" element={<Atc />} />
          <Route path="/dme" element={<Dme />} />
          <Route path="/elt" element={<Elt />} />
          <Route path="/eltart" element={<Eltart />} />
          <Route path="/homer" element={<Homer />} />
          <Route path="/radar" element={<Radar />} />
          <Route path="/weat" element={<Weat />} />
          <Route path="/weater" element={<Weater />} />
          <Route path="/gps" element={<Gps />} />
          <Route path="/qn" element={<Customer />} />
          <Route path="/quiz/:topic" element={<ShowAdminQuizPage />} />
          <Route path="/quiz/:topic/create" element={<CreateQuizPage />} />
          <Route path="/quiz/:topic/:id" element={<EditQuizPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/quiz-list" element={<UserQuizLisPage />} />
          <Route path="/test/:type/:topic" element={<GiveTestPage />} />
          <Route path="/leaderboard/:topic" element={<LeaderBoardPage />} />
          <Route path="/tutorial/:topic" element={<TutorialPage />} />
          <Route path="/quiz-settings" element={<QuizSettings />} />
          <Route
            path="/quiz-settings/create"
            element={<CreateQuizSettings />}
          />
          <Route path="/quiz-settings/:id" element={<EditQuizSettings />} />

          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/add" element={<AddUserPage />} />
          <Route path="/users/:id" element={<EditUserPage />} />

          {/* <Route path="/try" element={<Try/>}/>  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
