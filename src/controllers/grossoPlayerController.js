function grossoPlayerController (ngModule) {
  ngModule.controller('GrossoPlayerController',  ['$scope', '$window', '$timeout', function($scope, $window, $timeout) {
      var ctrl = this,
        sourceChanged = false;

      $scope.playing = false;
      $scope.onToTheNextBar = false;
      $scope.currentBarNumber = 0;
      $scope.currentBar = '';
      $scope.currentDuration = {
        total: 0,
        buffered: 0,
        played: 0,
        bufferedPercentage: 0,
        playedPercentage: 0
      };
      
      $scope.play = function () {
        if (!$scope.playing) {
          $scope.audio.play();
          $scope.playing = true;
          ctrl.onPlaying({ playing: true });
          updateTime();
        } else {
          $scope.audio.pause();
          $scope.playing = false;
          ctrl.onPlaying({ playing: false });
        }
      };
      
      $scope.rewind = function () {
        $scope.audio.currentTime = 0;
      };
      
      $scope.prev = function () {
        ctrl.onPreviousSong();
      };
      
      $scope.next = function () {
        ctrl.onNextSong();
      };
      
      $scope.onCanPlay = function () {
        if (sourceChanged) {
          sourceChanged = false;
          $scope.audio.load();
        } else {
          $scope.playing = false;
          $scope.play();
        }
      };
      
      $scope.setCurrentDuration = function (duration) {
        $scope.currentDuration.total = duration;
        calculateDurationPercentages();
      };
      
      $scope.setBufferedTime = function (lastBuffered) {
        $scope.currentDuration.buffered = lastBuffered;
        calculateDurationPercentages();
      };
      
      $scope.onTimeUpdate = function (played) {
        $scope.currentDuration.played = played;
        calculateDurationPercentages();
      };
      
      $scope.$watch(function(scope) { return ctrl.selectedSong },
        function(newValue, oldValue) {
          if (newValue !== null) {
            $scope.audio.pause();
            $scope.audio.load();
            sourceChanged = true;
            $scope.currentBar = '';
          }
        }
      );
      
      function resetDuration () {
        $scope.currentDuration = {
          total: 0,
          buffered: 0,
          played: 0
        };
        calculateDurationPercentages();
      }
      
      function calculatePercentage (part, total) {
        return Number(part * 100/ total).toFixed(2);
      }
      
      function calculateDurationPercentages () {
        if ($scope.currentDuration.total > 0) {
          $scope.currentDuration.bufferedPercentage = calculatePercentage($scope.currentDuration.buffered, $scope.currentDuration.total) + '%';
          $scope.currentDuration.playedPercentage = calculatePercentage($scope.currentDuration.played, $scope.currentDuration.total) + '%';            
        } else {
          $scope.bufferedPercentage = '0';
          $scope.playedPercentage = 0;
        }
      }
      
      function updateTime() {
        var raf = $window.requestAnimationFrame ||
          $window.webkitRequestAnimationFrame ||
          $window.mozRequestAnimationFrame    ||
          $window.oRequestAnimationFrame      ||
          $window.msRequestAnimationFrame     ||
          function (callback) {
            $window.setTimeout(callback, 1000 / 60);
          };
        var barDuration = 60 * 4 / ctrl.selectedSong.tempo;
        var currentTime = $scope.audio.currentTime;
        var timeFromFirstKick = currentTime - ctrl.selectedSong.firstKick;
        var barNumber = Math.floor(timeFromFirstKick / barDuration);
        if (barNumber < 0) {
          barNumber = -1;
        }
        
        if (barNumber !== $scope.currentBarNumber) {
          $timeout(function() {
          $scope.currentBarNumber = barNumber;
          if (barNumber >= 0 && typeof ctrl.selectedSong.bars !== 'undefined' && ctrl.selectedSong.bars.length > barNumber) {
            $scope.currentBar = ctrl.selectedSong.bars[barNumber].toUpperCase();
          }
          }, 0);
        }
        
        if ($scope.playing) {
          raf(updateTime);
        }
      }
    }]);
};

module.exports = grossoPlayerController;