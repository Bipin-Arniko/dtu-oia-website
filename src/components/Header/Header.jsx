import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuStyles, setMenuStyles] = useState({ right: "-100%" });
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 800) {
        setMenuStyles({ right: !menuOpened ? "-100%" : "5%" });
      } else if (windowWidth <= 1324) {
        setMenuStyles({ right: !menuOpened ? "-100%" : "8%" });
      } else {
        setMenuStyles({ right: "8%" });
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbarHeight = document.querySelector('nav').offsetHeight;

      if (scrollPosition > navbarHeight) {
        setNavbarBackground("#2e3267");
      } else {
        setNavbarBackground("transparent");
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpened]);

  return (
    <nav style={{ backgroundColor: navbarBackground, transition: 'background-color 0.3s ease-in-out' }}>
      <div className="container3 navcontainer">
      <Link to="/" className='logocontainer'> 
          <img src="dtulogo.png" alt="dtulogo" className="logo" />
          <div className="text">
            <h4>Office of International Affairs</h4><br />
            <p>Delhi Technological University</p>
          </div>
        </Link>
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <ul className="nav_menu" style={menuStyles}>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Courses">Courses</Link></li>
            <li><Link to="/DTUISS">DTU ISS</Link></li>
            <li><Link to="/Admission">Admission</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpened(prev => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
