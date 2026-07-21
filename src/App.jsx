
import { Routes, Route, NavLink } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import LoadingPage from "./pages/Loadingpage/Loadingpage";
import Profilepage from "./pages/Profilepage/Profile";
// import Bookcoldstoragepage from "./pages/ColdStoragePage/ColdStoragePage";
import LogisticsPage from "./pages/LogisticsPage/LogisticsPage";
import Shipment from "./pages/Shipment/Shipment";
import WelcomeBack from "./pages/Welcome-back/Welcome-back"
import LoginOrSignup from "./pages/Login-Signup/LoginOrSignup"
import MainPage from "./pages/MainPage/MainPage"

function App(){
  return(
    <Routes>

      <Route path="/" element={<LoadingPage />} />

     <Route path="/Homepage" element={<Homepage/>} />

     <Route path="/login" element={<LoginOrSignup/>} />

     <Route path="/main" element={<MainPage/>} />

     <Route path="/profilepage" element={<Profilepage />} />

     {/* <Route path="/bookcoldstoragepage" element={<Bookcoldstoragepage />} /> */}

     <Route path="/logisticspage" element={<LogisticsPage />} />

     <Route path="/shipment" element={<Shipment />} />

     <Route path="/welcome" element={<WelcomeBack />} />

    </Routes>
  )
}

export default App;
