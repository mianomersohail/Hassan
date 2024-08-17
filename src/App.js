import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './component/Home/Home.js';
import Nav from './component/nav/Nav.js';
import About from './component/About/About.js';
import Contact from './component/Contact/Contact.js';
function App() {
   return (
    <>
          <Router>
          <Nav/> 
           
          <Routes>
          <Route path="*" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>      
    </>
  );
}
export default App;