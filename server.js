import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aniketrajj3@gmail.com', 
    }
});

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
