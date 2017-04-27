require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

const MAILGUN_SMTP = process.env.MAILGUN_SMTP;
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;

var mailgun = require('mailgun-js')({apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN});
var mailTemplate = require("./public/email/emailTemplate.js");

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {

  var data = {
    from: `Wage Calculator <${MAILGUN_SMTP}>`,
    to: `${req.body.email}`,
    subject: 'Your Wage Results',
    html: mailTemplate(req.body)
  };

  mailgun.messages().send(data, function(error, body) {
    if (error) {
      console.log('error', error);
    }
    if (body) {
      console.log('body', body);
    }
    res.render('index');
  });
});
