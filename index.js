const config = require('./config');
const app = require('./app')(config);

window.app = app;

document.addEventListener('DOMContentLoaded', function () {
  require('./ui')(app, document.body);
});
