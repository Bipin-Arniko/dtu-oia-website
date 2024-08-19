import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoticeBoard from './components/NoticeBoard/NoticeBoard';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import DTUISS from './components/DTUISS/DTUISS';
import Admission from './components/Admission/Admission';
import Loading from './components/Loading/Loading';
import Contact from './components/Contact/Contact';
import { FaTimes } from 'react-icons/fa';
import './App.css'
import GoToTopButton from './components/GoToTopButton/GoToTopButton';
import Bonafide from './components/Bonafide/Bonafide';
import Dashboard from './components/Dashboard/Dashboard';
import OfficeInterface from './components/OfficeInterface/OfficeInterface';
import Login from './components/Login/Login';
const App=()=> {
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2700));
      setLoading(false);
    };

    fetchData();
  }, []);


  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="App">
    {loading ? (
      <Loading />
    ) : (
      <div>
    <Router>
        <Bonafide/>
        <Header/>
        <NoticeBoard />
        <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route
  path="/Login"
  element={authenticated ? <OfficeInterface /> : <Login setAuthenticated={setAuthenticated} />}
/>

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/DTUISS" element={<DTUISS />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
        <GoToTopButton/>
        </Router>
        { popupOpen && (
            <div className="popup-overlay">
              <div className="popup-content">
                <div className="popup-header">
                <img src="international_brochure.jpeg" alt="" />
                  <h3>Admission Brochure 2023</h3>
                  <button className="icon-button" onClick={closePopup}>
                    <FaTimes size={30}/>   
                  </button>
                </div>
                <a
                  href="international_brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="linktobrochure">Download</button>
                </a>
                </div>
                </div>
                )}
                </div>
    )}
    </div>

    
  );
}

export default App;
