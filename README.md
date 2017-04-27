# Wage Calculator

This is a simple single page web app that allows a user to calculate their earnings by providing their hours worked per week, and hourly rate. The app would produce the results, and give the user the option of sending their results an email address of their choice.

#### You will need the following to run this app
1. Mail Gun api key
2. Mail Gun Sandbox Domain
3. Mail Gun SMTP Login
3. An authorized email recipient added in the Mail Gun dashboard
4. Edit the .example.env and save as ".env"
```
MAILGUN_API_KEY = YOUR_API_KEY
MAILGUN_DOMAIN = YOUR_DOMAIN
MAILGUN_SMTP = YOUR_SMTP
```

If you don't want to use your own email to test you can use https://www.mailinator.com/ to test receiving emails, you will however still have to add their provided email address as an authorized recipient.

#### To run this app
Simply go into root directory of the app and run
```
$ npm install
$ node index.js
```
And go to localhost:8080 in Chrome

#### Tech Stack Used

1. ExpressJS
2. mailgun-js
3. Dotenv
4. body-parser
