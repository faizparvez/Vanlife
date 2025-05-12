import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Vans/Home";
import About from "./pages/Vans/About";
import Vans from "./pages/Vans/Vans";
import HomeLayout from "./components/HomeLayout";
import HostLayout from "./components/HostLayout";
import HostDashboard from "./pages/Host/HostDashboard";
import HostIncome from "./pages/Host/HostIncome";
import HostReviews from "./pages/Host/HostReviews";
import HostVans from "./pages/Host/HostVans";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route    path="/"        element={<HomeLayout />} >
            <Route index           element={<Home />} />  
            <Route path="/about"   element={<About />} />
            <Route path="/vans"    element={<Vans />} />
            <Route path="/host"    element={<HostLayout />} >
               <Route index                  element={<HostDashboard/>} />
               <Route path="/host/income"    element={<HostIncome/>} />
               <Route path="/host/reviews"   element={<HostReviews/>} />
               <Route path="/host/vans"      element={<HostVans/>} />
               <Route path="/host/vans:id"   element={<HostReviews/>} />
            </Route>


        </ Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
