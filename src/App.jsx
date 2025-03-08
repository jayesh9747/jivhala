

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import OurWork from './pages/OurWork'
import OurImpact from "./pages/OurImpact";
import AboutUs from "./pages/AboutUs";
import Header from './components/common/Header'
import Footer from "./components/common/Footer";
import Donate from "./pages/Donate";
import UPIPayment from "./components/Payment/UPIPayment";
import Gallery from "./pages/Gallery";

function App() {

 

  return (
    <div >
      
      <Router>
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourwork" element={<OurWork/>} />
        <Route path="/ourimpact" element={<OurImpact/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/upi-payment" element={<UPIPayment />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
   
      <Footer />
    </Router>
    
    </div>
  )
}

export default App
