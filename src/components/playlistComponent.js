var app = angular.module('grossomodoApp');

function PlaylistController ($scope) {
  var ctrl = this;
  
}

app.component('playlist', {
  templateUrl: '../../views/partials/playlist.html',
  controller: PlaylistController,
  bindings: {
    album: '<',
    songs: '<',
    selectedSong: '<',
    onSelectSong: '&'
  }
});