module.exports = function (ngModule) {
  function HeaderController ($scope) {
    var ctrl = this;
  }

  ngModule.component('header', {
    template: require('../../views/partials/header.html'),
    controller: HeaderController,
    bindings: {
      album: '<',
      selectedSong: '<',
      onPreviousSong: '&',
      onNextSong: '&',
      onShowDiscography: '&'
    }
  });
};