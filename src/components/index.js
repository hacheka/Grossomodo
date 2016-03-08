module.exports = function (ngModule) {
  require('./headerComponent')(ngModule);
  require('./pageComponent')(ngModule);
  require('./playlistComponent')(ngModule);
  require('./selectorComponent')(ngModule);
};