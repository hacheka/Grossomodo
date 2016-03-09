module.exports = function (ngModule) {
  
  ngModule.directive('grossoPlayer', function () {
    return {
      restrict: 'E',
      template: require('../../views/partials/player.html'),
      scope: {},
      bindToController: {
        album: '<',
        selectedSong: '<',
        onPreviousSong: '&',
        onNextSong: '&'
      },
      controller: 'GrossoPlayerController',
      controllerAs: 'ctrl',
      link: function (scope, element, attributes) {
        scope.audio = element.find('audio')[0];
        
        // Audio events
        scope.audio.addEventListener('canplaythrough', function () {
          scope.onCanPlay();
        });
        
        scope.audio.addEventListener('loadedmetadata', function () {
          scope.setCurrentDuration(scope.audio.duration);
        });

        scope.audio.addEventListener('progress', function () {
          var lastBuffered = 0,
            i;
          
          for (i = 0; i < scope.audio.buffered.length; i++) {
            if (scope.audio.buffered.end(i) > lastBuffered) {
              lastBuffered = scope.audio.buffered.end(i);
            }
          }
          
          scope.setBufferedTime(lastBuffered);
        });       

        scope.audio.addEventListener('timeupdate', function () {
          scope.onTimeUpdate(scope.audio.currentTime);
        });
              
        // Destroy
        scope.$on('$destroy', function() {
          scope.audio.removeEventListener('canplaythrough');
          scope.audio.removeEventListener('loadedmetadata');
          scope.audio.removeEventListener('progress');
          scope.audio.removeEventListener('timeupdate');
        });
      }
    };
  });
};