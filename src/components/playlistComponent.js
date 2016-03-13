module.exports = function (ngModule) {
  function PlaylistController ($scope, lyricsService) {
    var ctrl = this;
    
    ctrl.hasLyrics = function (id) {
      return lyricsService.hasLyrics(id);
    }
    
  }

  ngModule.component('playlist', {
    template: require('../../views/partials/playlist.html'),
    controller: PlaylistController,
    bindings: {
      album: '<',
      songs: '<',
      playing: '<',
      selectedSong: '<',
      onSelectSong: '&'
    }
  });
};