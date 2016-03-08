var angular = require('angular');

var app = angular.module('grossomodoApp', []);

require('./controllers/grossoPlayerController')(app);
require('./directives/grossoPlayerDirective')(app);
require('./services')(app);
require('./components')(app);