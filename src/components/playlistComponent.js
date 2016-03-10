module.exports = function (ngModule) {
  function PlaylistController ($scope) {
    var ctrl = this;
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