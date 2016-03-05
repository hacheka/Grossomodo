var app = angular.module('grossomodoApp');

function SelectorController ($scope) {
  var ctrl = this;

}

app.component('selector', {
  templateUrl: '../../views/partials/selector.html',
  controller: SelectorController,
  bindings: {
    albums: '<',
    onSelectAlbum: '&'
  }
});