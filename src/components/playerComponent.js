var app = angular.module('grossomodoApp');

function PlayerController ($scope, $element, $attrs) {
  var ctrl = this;
  
  ctrl.info = {
    albumName: 'Manifiesto',
  };
}

app.component('player', {
  templateUrl: '../../views/player.html',
  controller: PlayerController,
  bindings: {
    selectedSong: '<'
  }
});