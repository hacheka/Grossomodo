module.exports = function (ngModule) {
  function SelectorController ($scope) {
    var ctrl = this;
  }

  ngModule.component('selector', {
    template: require('../../views/partials/selector.html'),
    controller: SelectorController,
    bindings: {
      albums: '<',
      onSelectAlbum: '&'
    }
  });
};