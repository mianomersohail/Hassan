import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './component/Nav';
import Services from './component/Our-Services/Services';
function App() {
   return (
    <>
        <Router>
          <Nav />
          <Services/>
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
