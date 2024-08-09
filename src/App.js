import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './component/Nav';
function App() {
   return (
    <>
        <Router>
          <Nav />
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
