const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const nodemailer = require('nodemailer');

const fs = require('fs');

const app = express();
const port = 5001;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//       user: 'aniketrajj3@gmail.com', 
//   }
// });

app.post('/send-email', (req, res) => {
  const { firstName, middleName, lastName, email, message } = req.body;

  let mailOptions = {
      from: email,
      to: 'aniketrajj3@gmail.com',
      subject: 'Contact form response',
      text: `Name: ${firstName} ${middleName} ${lastName}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log(error);
          res.status(500).send('Error sending email');
      } else {
          console.log('Email sent: ' + info.response);
          res.send('Email sent successfully');
      }
  });
});

const certificatesDir = path.join(__dirname, 'certificates'); 

if (!fs.existsSync(certificatesDir)) {
  fs.mkdirSync(certificatesDir, { recursive: true }); 
}

const validUsername = 'oia';
const validPassword = '12345';

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === validUsername && password === validPassword) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, error: 'Invalid username or password' });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, certificatesDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${req.params.studentID}_${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage });

let requestHistory = [];

app.post('/approve-request/:uniqueId', (req, res) => {
  const uniqueId = req.params.uniqueId;
  const requestIndex = requestHistory.findIndex(request => request.uniqueId === uniqueId);
  if (requestIndex !== -1) {
    requestHistory[requestIndex].status = 'approved';
    saveRequestHistory();
    return res.status(200).json({ success: true, message: 'Request approved successfully' });
  } else {
    return res.status(404).json({ success: false, message: 'Request not found' });
  }
});

app.post('/reject-request/:uniqueId', (req, res) => {
  const uniqueId = req.params.uniqueId;
  const requestIndex = requestHistory.findIndex(request => request.uniqueId === uniqueId);
  if (requestIndex !== -1) {
    requestHistory[requestIndex].status = 'rejected';
    saveRequestHistory();
    return res.status(200).json({ success: true, message: 'Request rejected successfully' });
  } else {
    return res.status(404).json({ success: false, message: 'Request not found' });
  }
});

function saveRequestHistory() {
  const filePath = path.join(__dirname, 'request-history.json');
  fs.writeFileSync(filePath, JSON.stringify(requestHistory, null, 2), 'utf8');
}

app.post('/submit-request', (req, res) => {
  const requestData = { ...req.body, uniqueId: generateUniqueId() };
  console.log('Received form data:', requestData);
  requestHistory.push(requestData);
  res.json({ success: true, uniqueId: requestData.uniqueId }); 
});

function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

app.post('/upload-certificate/:studentID', upload.single('certificate'), (req, res) => {
  const studentID = req.params.studentID;
  const certificateFile = req.file;

  if (!studentID || typeof studentID !== 'string') {
    return res.status(400).json({ success: false, message: 'Invalid student ID' });
  }

  if (!certificateFile) {
    return res.status(400).json({ success: false, message: 'No certificate file uploaded' });
  }

  const certificateURL = `/login-signup-backend/certificates/${certificateFile.filename}`;

  const index = requestHistory.findIndex(request => request.studentID === studentID);
  if (index !== -1) {
    requestHistory[index] = {
      ...requestHistory[index],
      approved: true,
      certificateFileURL: certificateURL
    };
  }

  res.status(200).json({ success: true, message: 'Certificate uploaded successfully', certificateURL });
});

app.get('/request-history/:uniqueId', (req, res) => {
  const uniqueId = req.params.uniqueId;
  const previousRequest = requestHistory.find(request => request.uniqueId === uniqueId);
  if (previousRequest) {
    res.json(previousRequest);
  } else {
    res.status(404).json({ error: 'Request not found' });
  }
});

app.get('/request-history', (req, res) => {
  res.json(requestHistory);
});

app.post('/manual-approval/:uniqueId', (req, res) => {
  const uniqueId = req.params.uniqueId;
  const { status } = req.body;

  const requestIndex = requestHistory.findIndex(request => request.uniqueId === uniqueId);
  if (requestIndex !== -1) {
    requestHistory[requestIndex].approvalStatus = status;
    res.json({ success: true, message: 'Approval status updated successfully', approvalStatus: status });
  } else {
    res.status(404).json({ error: 'Request not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
