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
const TEST_EMAIL = process.env.TEST_EMAIL;

var api_key = process.env.MAILGUN_API_KEY;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain})


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/', (req, res) => {

 console.log(req.body);

  var data = {
    from: `Wage Calculator <${MAILGUN_EMAIL}>`,
    to: `${TEST_EMAIL}`,
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
  };
  console.log(data);

  mailgun.messages().send(data, function(error, body) {
    console.log('error', error);
    console.log('body', body);
    res.render('index');
  });
});
