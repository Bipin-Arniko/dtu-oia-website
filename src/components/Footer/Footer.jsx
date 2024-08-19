import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer__container">
            <div className="footer1">
                <a href="index.html"><h4>Office of International Affairs</h4></a>
                <p>Delhi Technological University,<br/>
                Mechanical Department, First Floor<br/>Bawana Road ,110042, New Delhi </p>
            </div>
            <div className="footer2">
                <h4>Permalinks</h4>
                <ul className="permalinks">
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Courses">Courses</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer3">
                <h4>Privacy</h4>
                <ul className="privacy">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and conditions</a></li>
                    <li><a href="#">Refund Policy</a></li>
                </ul>
            </div>
            <div className="footer4">
                <h4>Contact Us</h4>
                <div>
                <p>oia@dtu.ac.in</p>
                    <p>international.dtu@dtu.ac.in</p>
                </div>
            
            <div className="footer5">
                <ul className="social">
                    <li><a href="https://www.facebook.com/profile.php?id=100065103819173&sk=about_contact_and_basic_info"  target='_blank'><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/dtu_delhi" target='_blank'><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/dtu.delhi/" target='_blank'><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/delhi-technological-university-delhi-397129209/" target='_blank'><i className="fab fa-linkedin"></i></a></li>
                  </ul>
            </div>
        </div>
        </div>
            <div className="footer__copyright">
                <small>Copyright &copy; Delhi Technological University</small>
                <p>Designed and Developed by <a href="https://www.linkedin.com/in/aniketrajjha/" target='_blank' className='copyrightname'>Aniket Raj Jha</a></p>
            </div>
    </footer>
  )
}

export default Footer
