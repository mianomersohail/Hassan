import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './component/Nav';
import Services from './component/Our-Services/Services';
import Since from './component/since/Since.js';
import Footer from './component/Footer.js/Footer.js';
function App() {
   return (
    <>
        <Router>
          <Nav />
          <Services/>
          <Since/>
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
