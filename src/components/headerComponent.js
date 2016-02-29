var app = angular.module('grossomodoApp');

function HeaderController ($scope) {
  var ctrl = this;
}

app.component('header', {
  templateUrl: '../../views/header.html',
  controller: HeaderController,
  bindings: {
    selectedSong: '<'
  }
});