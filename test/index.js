// Prepare Modules
const express = require('express');
const nunjucks = require('nunjucks');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const path = require('path');

// Prepare Express
const app = express();

// Cookie Session
app.use(cookieSession({
    keys: ['00000000000', '00000000000']
}));

// Body Parser
app.use(bodyParser.json());
const bodyParseN = bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
});

// Nunjucks
nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app
});

app.set('view engine', 'nunjucks');

// Static Files
app.use(express.static(path.join(__dirname, '/public'), {
    maxAge: '2592000000' // uses milliseconds per docs
}));

// Timezone Module
const tzEx = require('../index');
const timezoneExpress = new tzEx(app, { urls: { setCookie: '/setCookie' }, clock24: true, autoList: true, setSecondary: true }, function (req, res) {
    return new Promise(function (resolve) {
        bodyParseN(req, res, () => {

            // Return csrfToken
            resolve({
                now: '',
                server: ''
            });

            // Complete
            return;

        });
        return;
    });
});

app.use(timezoneExpress.insert());

// Get
app.get('/', (req, res) => {

    console.group(new Date().toString());
    console.log(req.session);
    console.log(req.timezone);
    console.groupEnd();

    return res.render('test', { timezone: req.timezone, timezoneTemplate: req.timezone.getClientWeb() });
});

// Start Timezone Module
timezoneExpress.start();

app.listen(5000, function () {
    console.log('http://localhost:5000');
});

