module.exports = function (ngModule) {
  ngModule.factory('lyricsService', function () {
    var lyrics = [];
    
    lyrics.push(require("json!../data/manifiesto/intromission.json"));
    lyrics.push(require("json!../data/manifiesto/putos-amos.json"));
    lyrics.push(require("json!../data/manifiesto/phardarthemcee.json"));
    lyrics.push(require("json!../data/manifiesto/bienvenido.json"));
        
    var fetchLyrics = function (lyricsId) {
      var fetchedLyrics = null;
      
      lyrics.forEach(function (item) {
        if (item.id === lyricsId && fetchedLyrics === null) {
          fetchedLyrics = item;
        }
      });
      
      return fetchedLyrics;
    };
    
    var hasLyrics = function (lyricsId) {
      return lyrics.filter(function (item) {
        return item.id === lyricsId;
      }).length > 0;
    };

    return {
      fetchLyrics: fetchLyrics,
      hasLyrics: hasLyrics
    };
  });
};