module.exports = function (ngModule) {
  ngModule.factory('lyricsService', function () {
    var lyrics = [];
    
    lyrics.push(require("json!../data/manifiesto/intromission.json"));
    lyrics.push(require("json!../data/manifiesto/putos-amos.json"));
    
    var fetchLyrics = function (lyricsId) {
      var fetchedLyrics = null;
      
      lyrics.forEach(function (item) {
        if (item.id === lyricsId && fetchedLyrics === null) {
          fetchedLyrics = item;
        }
      });
      
      return fetchedLyrics;
    }

    return {
      fetchLyrics: fetchLyrics
    };
  });
};