import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './components/navbar'
import Card from './components/Card';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/About';
import Skills from './components/skills';
import Footer from './components/footer';



function App() {

  return (
    <>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Card />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Footer />} />
      </Routes>
    </Router>
    
    
    </>
  );
}

export default App;
