import { BrowserRouter,Routes,Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Host from "./pages/Host"
import Vans from "./pages/Vans"
import Layout from "./components/Layout"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      
  
     <Route path="/" element={<Layout/>} />
         <Route path="home" element={<Home/>} />
         <Route path="host"  element={<Host/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="vans"  element={<Vans/>}/>

     {/* </Route> */}



    </Routes>
    </BrowserRouter>
  )
}

export default App
