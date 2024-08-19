import React, { useState } from 'react';
import './Admission.css';

const EligibilityPopup = ({ onClose }) => {
  return (
    <div className="eligibility-popup">
      <h3>Eligibility Check</h3>
      <iframe title="Eligibility PDF" src="international_brochure.pdf"></iframe>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const Admission = () => {
  const [isEligibilityPopupOpen, setEligibilityPopupOpen] = useState(false);

  const handleEligibilityClick = () => {
    setEligibilityPopupOpen(true);
  };

  const closeEligibilityPopup = () => {
    setEligibilityPopupOpen(false);
  };

  return (
    <div className="container5">
      <div className="admissiongrid">
        <div className="admissionleft">
          
          <h1>Admission Criteria</h1>

          <div className="admissiondiv">
            <ul>
              <li>
                1. Mode-1 (DASA)
                <a href="#" onClick={handleEligibilityClick} className='linkanchor'>Check Eligibility</a>
              </li>
              <li>
                2. Mode-2 (ICCR)
                <a href="#" onClick={handleEligibilityClick} className='linkanchor'>Check Eligibility</a>
              </li>
              <li>
                3. Mode-3 (DTU Portal)
                <a href="#" onClick={handleEligibilityClick} className='linkanchor'>Check Eligibility</a>
              </li>
              
            </ul>
            </div>

<div className="important-links-section">
  <h3>Important Links</h3>
  <ul>
    <li>
      <a href="https://saarthi.dtu.ac.in/" target="_blank" rel="noopener noreferrer" className='linkanchor'>
        DTU Saarthi Portal
      </a>
    </li>
    <li>
      <a href="https://www.dasanit.org/dasa2023/" target="_blank" rel="noopener noreferrer" className='linkanchor'>
        DASA Official Website
      </a>
    </li>
    <li>
      <a href="https://a2ascholarships.iccr.gov.in/" target="_blank" rel="noopener noreferrer" className='linkanchor'>
        ICCR Scholarship Portal
      </a>
    </li>
  </ul>
</div>
          
        </div>
        <div className="admissionright">
        <div className="noticeheader">
  <h3>Announcements:</h3>
  <div className="notice-release">
    <div className="notice-icon"> <img src="notice.svg" alt="" /></div>
    <p>
      <a href="http://dtu.ac.in/Web/notice/2024/jan/file0140.pdf" target='blank'>Regarding Upgradation of Branch</a>
      <span className="notice-date"> - January 31, 2024</span>
    </p>
  </div>
  <div className="notice-release">
    <div className="notice-icon"> <img src="notice.svg" alt="" /></div>
    <p>
      <a href="#notice2">Notice Release Content Goes Here</a>
      <span className="notice-date"> - February 1, 2024</span>
    </p>
  </div>
  {/* <div className="notice-release">
    <div className="notice-icon"> <img src="notice.svg" alt="" /></div>
    <p>
      <a href="#notice3">Notice Release Content Goes Here</a>
      <span className="notice-date"> - February 2, 2024</span>
    </p>
  </div> */}
  {/* <div className="notice-release">
    <div className="notice-icon"> <img src="notice.svg" alt="" /></div>
    <p>
      <a href="#notice4">Notice Release Content Goes Here</a>
      <span className="notice-date"> - February 3, 2024</span>
    </p>
  </div> */}
</div>
<iframe allowfullscreen="" scrolling="no" class="fp-iframe" src="https://heyzine.com/flip-book/c8ed99f285.html" className='flipbook'></iframe>
</div>
        {isEligibilityPopupOpen && <EligibilityPopup onClose={closeEligibilityPopup} />}
      </div>
    </div>
  );
};

export default Admission;
