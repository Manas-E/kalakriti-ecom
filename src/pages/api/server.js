var express = require('express');
var router = express.Router();
var cors = require('cors');
const creds = require('./config.js');

import nodemailer from "nodemailer"

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)

var transport = {
    name: "gmail.com",
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: creds.mail.USER,
    pass: creds.mail.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});



export default function handler(req, res) {
    // const body = JSON.parse(req.body)

    var name = req.query.name
  var email = req.query.email
  var message = req.query.message
  var sub = req.query.sub
  var content = `name: ${name} \n email: ${email} \n message: ${message} `
    console.log(content);
  var mail = {
    from: name,
    to: 'manazharma@gmail.com',  // Change to email address that you want to receive messages on
    subject: sub,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success mail sent'
      })
    }
  })


  }


  