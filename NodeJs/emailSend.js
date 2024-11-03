// 1. import nodemailer
const nodemailer = require('nodemailer');
const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// 2. Configure email and send it.

async function sendMail(){

    interface.question("Enter the recipient's email address: ", (recipientEmail) =>{
 
// 1. Create an email transporter.
// SMTP (Simple Mail Transfer Protocol)

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'codingninjas2k16@gmail.com',
        pass:'slwvvlczduktvhdj'
    }
});

       


//2. Configure email content
const mailOptions = {
    from: 'codingninjas2k16@gmail.com',
    to: recipientEmail,
    subject: 'Welcome to NodeJS App',
    text: 'This is an email using nodemailer in NodeJS',
};

// 3. Send the email
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log('Email send failed with error:', err);
    } else {
        console.log('Email sent successfully:', info.response);
    }
    // Close readline interface
    rl.close();
});
});
}

sendMail();