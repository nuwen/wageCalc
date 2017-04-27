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
 let results = req.body.results;

  var data = {
    from: `Wage Calculator <${MAILGUN_EMAIL}>`,
    to: `${req.body.email}`,
    subject: 'Your Wage Results',
    html: `Hello ${req.body.email}!
    <p>You had requested the results of your expected earnings to be sent to your email!</p>
    <table style="width:500px;">
      <thead>
        <tr>
          <th></th>
          <th style="text-align:right;">Hours Worked</th>
          <th style="text-align:right;">Total Earnings</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Weekly</td>
          <td style="text-align:right;">${results.week.hours}</td>
          <td style="text-align:right;">${results.week.earnings}</td>
        </tr>
        <tr>
          <td>Monthly</td>
          <td style="text-align:right;">${results.month.hours}</td>
          <td style="text-align:right;">${results.month.earnings}</td>
        </tr>
        <tr>
          <td>Yearly</td>
          <td style="text-align:right;">${results.year.hours}</td>
          <td style="text-align:right;">${results.year.earnings}</td>
        </tr>
      </tbody>
    </table>
    <br><br><br>
    Regards,<br>
    Wage Calculator
    `
  };
  console.log(data);

  mailgun.messages().send(data, function(error, body) {
    console.log('error', error);
    console.log('body', body);
    res.render('index');
  });
});
