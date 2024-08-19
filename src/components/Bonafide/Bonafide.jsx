import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bonafide.css';
const Bonafide = () => {
  const navigate = useNavigate();

  const handleStudentDashboardClick = () => {
    navigate('/Dashboard');
  };

  const handleOfficeDashboardClick = () => {
    navigate('/Login');
  };

  return (
    <div className='bonafide'>
      <button onClick={handleStudentDashboardClick} className='btndashboard2'>Student Dashboard</button>
      <button onClick={handleOfficeDashboardClick} className='btndashboard2'>Office Dashboard</button>
    </div>
  );
};

export default Bonafide;
