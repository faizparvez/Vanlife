import { BrowserRouter,Routes,Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import Layout from "./components/Layout"
import Vandetail from "./pages/Vandetail"
import Hostlayout from "./components/Hostlayout"
import Hostincome from "./pages/Hostincome"
import Hostdashboard from "./pages/Hostdashboard"
import Hostvans from "./pages/Hostvans"
import Hostreviews from "./pages/Hostreviews"
import Hostvanlayout from "./pages/Hostvanlayout"
import Hostvandetail from "./pages/Hostvandetail"
import Hostvanphotos from "./pages/Hostvanphotos"
import Hostvanpricing from "./pages/Hostvanpricing"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      
  
     <Route path="/" element={<Layout/>} >
         <Route index element={<Home/>} />

         <Route path="host"  element={<Hostlayout/>} >

            <Route index element={<Hostdashboard/>} />           
            <Route path="income" element={ <Hostincome/>}  />           
            <Route path="reviews" element={ <Hostreviews/> } />           
            <Route path="vans" element={ <Hostvans/> } />
            <Route path="vans/:id" element={ <Hostvanlayout/> } >
              <Route index element={ <Hostvandetail/> } />
              <Route path="pricing" element={ <Hostvanpricing/> } />
              <Route path="photos" element={ <Hostvanphotos/> } />
            </Route>


         </Route>           


         <Route path="about" element={<About/>}/>
         <Route path="vans"  element={<Vans/>}/>
         <Route path="vans/:id"  element={<Vandetail/>}/>
    

    
    
    
     </Route>
    


    </Routes>
    </BrowserRouter>
  )
}

export default App
