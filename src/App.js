import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Services from './component/Our-Services/Services';
import Since from './component/since/Since.js';
import Footer from './component/Footer.js/Footer.js';
import Pricing from './component/Pricing/Pricing.js';
import Home from './component/Home/Home.js';
import Nav from './component/nav/Nav.js';
import Portfolio from './component/Portfolio/Portfolio.js';
function App() {
   return (
    <>
          <Router>
          <Nav/>
          <Home/>

          <Services/>
          <Portfolio/>
          <Since/>
          <Pricing/>
          
          <Footer/>
          <Routes>
          <Route path="" element={''} />
          <Route path="" element={''} />
          <Route path="/" element={""} />
          </Routes>
        </Router>      
    </>
  );
}
export default App;