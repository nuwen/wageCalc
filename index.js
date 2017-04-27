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

const MAILGUN_EMAIL = process.env.MAILGUN_EMAIL_SERVER;
const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;

// var api_key = process.env.MAILGUN_API_KEY;
// var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN});
var mailTemplate = require("./public/email/emailTemplate.js");

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  let results = req.body.results;

  var data = {
    from: `Wage Calculator <${MAILGUN_EMAIL}>`,
    to: `${req.body.email}`,
    subject: 'Your Wage Results',
    html: mailTemplate(req.body)
  };

  mailgun.messages().send(data, function(error, body) {
    console.log('error', error);
    console.log('body', body);
    res.render('index');
  });
});
