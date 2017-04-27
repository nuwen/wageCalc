module.exports = function(body){
  let results = body.results;

  let email = `Hello ${body.email}!
  <p>You had requested the results of your expected earnings to be sent to your email!</p>
  <br><br><br>
  <strong>Your Hourly Rate: ${body.wage}</strong>
  <strong>Your Weekly Hours: ${body.hours}</strong>
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
  `;

  return email;
};
