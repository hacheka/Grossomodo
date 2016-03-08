module.exports = function (ngModule) {
  require('./albumService')(ngModule);
  require('./lyricsService')(ngModule);
};