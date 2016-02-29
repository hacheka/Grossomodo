var app = angular.module('grossomodoApp');

function PlaylistController ($scope) {
  var ctrl = this;
  
}

app.component('playlist', {
  templateUrl: '../../views/playlist.html',
  controller: PlaylistController,
  bindings: {
    songs: '<',
    selectedSong: '<',
    onSelectSong: '&'
  }
});