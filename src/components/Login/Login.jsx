import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/login', { username, password });
      if (response.data.success) {
        setAuthenticated(true);
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in: ', error);
      setErrorMessage(
        'Invalid UserName or Password.');
    }
  };

  return (
    <div className="cover3">
    <div className="dtulogohead">
        <img src="dtulogo.png" alt="" />
    </div>
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='enter' required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='enter' required />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <div className="manage"><p> Managed by Office of International Affairs, Delhi Technological University.</p></div>
      </div>
  );
};

export default Login;
