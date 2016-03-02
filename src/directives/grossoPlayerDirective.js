var app = angular.module('grossomodoApp');

app.directive('grossoPlayer', function () {
  return {
    restrict: 'E',
    templateUrl: '../../views/player.html',
    scope: {},
    bindToController: {
      albumName: '<',
      selectedSong: '<',
      onPreviousSong: '&',
      onNextSong: '&'
    },
    controller: 'GrossoPlayerController',
    controllerAs: 'ctrl',
    link: function (scope, element, attributes) {
      scope.audio = element.find('audio')[0];
      
      // Audio events
      scope.audio.addEventListener('pause', function () {
        // console.log('EVENTO PAUSE!');
      });

      scope.audio.addEventListener('abort', function () {
        // console.log('EVENTO ABORT!');
      });
      
      scope.audio.addEventListener('canplaythrough', function () {
        // console.log('EVENTO CANPLAYTHROUGH!');
        scope.onCanPlay();
      });
            
      scope.audio.addEventListener('loadeddata', function () {
        // console.log('EVENTO LOADEDDATA!');
      });
      
      scope.audio.addEventListener('loadedmetadata', function () {
        // console.log('EVENTO LOADEDMETADATA!');
      });
      
      scope.audio.addEventListener('loadstart', function () {
        // console.log('EVENTO LOADSTART!');
      });

      scope.audio.addEventListener('progress', function () {
        // var i = 0;
        // 
        // for (i = 0; i < scope.audio.buffered.length; i++) {
        //   console.log('From ' + scope.audio.buffered.start(i) + ' to ' + scope.audio.buffered.end(i) + '.');
        // }
      });       

      scope.audio.addEventListener('timeupdate', function () {
        // console.log('EVENTO TIMEUPDATE!');
      });
            
      // Destroy
      scope.$on('$destroy', function() {
        // scope.audio.removeEventListener('pause');
      });
    }
  };
});