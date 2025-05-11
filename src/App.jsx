import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import HomeLayout from "./pages/HomeLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route    path="/"        element={<HomeLayout />} >
           <Route index           element={<Home />} />  
           <Route path="/about"   element={<About />} />
           <Route path="/vans"    element={<Vans />} />



        </ Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
