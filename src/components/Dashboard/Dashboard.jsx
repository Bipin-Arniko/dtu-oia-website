import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
const Dashboard = () => {    
  const [formData, setFormData] = useState({
    fullName: '',
    studentID: '',
    reason: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [certificateFileURL, setCertificateFileURL] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  const [approvalStatus, setApprovalStatus] = useState('');
  const [checkUniqueId, setCheckUniqueId] = useState('');
  const [checkStatus, setCheckStatus] = useState('');
  const [validUniqueId, setValidUniqueId] = useState(true);
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    checkPreviousRequest();
  }, [submitted]); 

  const checkPreviousRequest = async () => {
    try {
      const response = await axios.get('http://localhost:5001/request-history');
      const latestRequest = response.data[response.data.length - 1];
      if (latestRequest) {
        setUniqueId(latestRequest.uniqueId);
        setApprovalStatus(latestRequest.approved ? 'approved' : (latestRequest.rejected ? 'rejected' : 'pending'));
        setCertificateFileURL(latestRequest.certificateFileURL || '');
      }
    } catch (error) {
      console.error('Error checking previous request: ', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/submit-request', formData);
      if (response.data.success) {
        setUniqueId(response.data.uniqueId);
        if (response.data.approvalStatus === 'approved') { 
          setApprovalStatus('approved'); 
          setResponseMessage(
            <div>
              Your request has been approved!
              <br />
              Your unique ID is: {response.data.uniqueId}
            </div>
          );
        } else if (response.data.approvalStatus === 'rejected') {
          setApprovalStatus('rejected');
          setResponseMessage(
            <div>
              Your request has been rejected.
              <br />
              Reason for rejection: {response.data.reason}
            </div>
          );
        } else {
          setApprovalStatus('pending');
          setResponseMessage(
            <div>
              Your request is pending approval.
              <br />
              Your unique ID is: {response.data.uniqueId}
            </div>
          );
        }
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting request: ', error);
    }
  };
  
  
  

  const handleCheckStatus = async () => {
    try {
      if (!checkUniqueId) {
        setValidUniqueId(false);
        return;
      }
      const response = await axios.get(`http://localhost:5001/request-history/${checkUniqueId}`);
      if (response.data) {
        if (response.data.status === 'approved') {
          setCheckStatus('approved');
          setCertificateFileURL(response.data.certificateFileURL || '');
        } else if (response.data.status === 'rejected') {
          setCheckStatus('rejected');
        } else {
          setCheckStatus('pending');
        }
        setValidUniqueId(true);
      }
    } catch (error) {
      console.error('Error checking request status: ', error);
      setValidUniqueId(false);
    }
  };
  
  
  return (
    <div className="cover">
    <div className="container10">
      <div className="left">
      <div className="dtulogohead">
        <img src="dtulogo.png" alt="" />
    </div>
      <div className="check-status-section">
        <h2>Check Request Status</h2>
        <input
          type="text"
          placeholder="Enter Unique ID"
          value={checkUniqueId}
          onChange={(e) => setCheckUniqueId(e.target.value)}
          className='uniqueenter'
          required
        />
        <button onClick={handleCheckStatus}>Check Status</button>
        {!validUniqueId && <p className='statusfont'>Please enter a Valid Unique ID</p>}
        {checkStatus && validUniqueId && (
  <>
    <p className='statusfont'>Status: {checkStatus}</p>
    {checkStatus === 'approved'  && (
      <>
        <p>Certificate file:</p>
        {certificateFileURL && (
          <a href={certificateFileURL} target="_blank" rel="noopener noreferrer" style={{color:"green"}}>
            Download Certificate
          </a>
        )}
      </>
    )}
    {checkStatus === 'rejected' && (
      <p className='statusfont'>Your request has been rejected.</p>
    )}
    {checkStatus === 'pending' && (
      <p className='statusfont'>Your request is pending approval.</p>
    )}
    
  </>
)}

      </div>
      </div>
      <div className="request-section">
        <h2 className='request'>Request Bonafide Certificate</h2>
        {responseMessage && (
          <div className='sentresponse'>
            <p>{responseMessage}</p>
          </div>
        )}
        {!submitted && (
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className='uniqueenter'
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="studentID">Student ID:(ex: 2K21-IT-25)</label>
              <input
                type="text"
                id="studentID"
                name="studentID"
                value={formData.studentID}
                onChange={handleChange}
                className='uniqueenter'
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="reason">Reason for Certificate:</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className='uniqueenter'
                required
              ></textarea>
            </div>
            <button type="submit">Submit Request</button>
          </form>
        )}
      </div>
    </div>
      <div className="manage"><p> Managed by Office of International Affairs, Delhi Technological University.</p></div>
      </div>
  );
};

export default Dashboard;
