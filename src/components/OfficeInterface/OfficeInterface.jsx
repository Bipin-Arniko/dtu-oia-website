import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OfficeInterface.css';

const OfficeInterface = () => {
  const [requestHistory, setRequestHistory] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [manualApproval, setManualApproval] = useState(false);
  const [actionPerformed, setActionPerformed] = useState(false);
  const [reasonPopup, setReasonPopup] = useState({ show: false, reason: '' });

  useEffect(() => {
    fetchRequestHistory();
  }, [uploadSuccess]);

  const fetchRequestHistory = async () => {
    try {
      const response = await axios.get('http://localhost:5001/request-history');
      setRequestHistory(response.data.reverse());
    } catch (error) {
      console.error('Error fetching request history: ', error);
    }
  };

  const handleUploadCertificate = async (requestData) => {
    try {
      const formData = new FormData();
      formData.append('certificate', selectedFile);

      const response = await axios.post(`http://localhost:5001/upload-certificate/${requestData.studentID}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.success) {
        setUploadSuccess(true);
        if (!manualApproval) {

          updateRequestStatus(requestData.uniqueId, 'pending');
        }
        setActionPerformed(true); 
      }
    } catch (error) {
      console.error('Error uploading certificate: ', error);
    }
  };

  const updateRequestStatus = async (uniqueId, status) => {
    try {
      const endpoint = status === 'rejected' ? `http://localhost:5001/reject-request/${uniqueId}` : `http://localhost:5001/approve-request/${uniqueId}`;

      const response = await axios.post(endpoint);
      if (response.data.success) {
        // Update the request status
        setRequestHistory(prevRequestHistory =>
          prevRequestHistory.map(request =>
            request.uniqueId === uniqueId ? { ...request, status: status } : request
          )
        );
      }
    } catch (error) {
      console.error('Error updating approval status: ', error);
    }
  };

  const handleManualApproval = (status, uniqueId) => {
    updateRequestStatus(uniqueId, status);
    setActionPerformed(true); 
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleRefresh = () => {
    fetchRequestHistory();
    setActionPerformed(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = '/login';
  };

  const toggleReasonPopup = (reason) => {
    setReasonPopup({ show: !reasonPopup.show, reason: reason });
  };

  console.log('Request History:', requestHistory);

  return (
    <div className="cover2">
    <div className='office-Interface-container'>
      <h2>Bonafide Dashboard</h2>
      <div className="header-buttons">
        <button onClick={handleRefresh}>Refresh</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {reasonPopup.show && (
        <div className="reason-popup">
          <div className="reason-popup-content">
            <span className="close" onClick={() => toggleReasonPopup('')}>
              &times;
            </span>
            <h2>Reason:</h2>
            <p>{reasonPopup.reason}</p>
          </div>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Student ID</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Unique ID</th>
          </tr>
        </thead>
        <tbody>
          {requestHistory.map((request, index) => (
            <tr key={index} className={request.status === 'approved' ? 'approved' : (request.status === 'rejected' ? 'rejected' : '')}>
              <td>{index + 1}</td>
              <td>{request.fullName}</td>
              <td>{request.studentID}</td>
              <td>
                {request.reason && (
                  <button onClick={() => toggleReasonPopup(request.reason)} className='viewbtn'>View</button>
                )}

              </td>
              <td>{request.status}</td>
              <td>
                {!actionPerformed || request.status === 'pending' ? (
                  <>
                    <input type="file" onChange={handleFileChange} className='upload' />
                    <button onClick={() => handleUploadCertificate(request)} className='changestate'>Approve</button>
                    <button onClick={() => handleManualApproval('rejected', request.uniqueId)} className='changestate'>Reject</button>
                  </>
                ) : (
                  request.status === 'pending' ? 'Pending' : (request.status === 'approved' ? 'Approved' : 'Rejected')
                )}
              </td>
              <td>{request.uniqueId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default OfficeInterface;
