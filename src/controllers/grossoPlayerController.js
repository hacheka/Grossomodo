var app = angular.module('grossomodoApp');

app.controller('GrossoPlayerController',  ['$scope', '$window', '$timeout', function($scope, $window, $timeout) {
    var ctrl = this;

    $scope.playing = false;
    $scope.currentBarNumber = 0;
    $scope.currentBar = '';
    
    $scope.play = function () {
      $scope.audio.play();
      $scope.playing = true;
      updateTime();
    };
    
    $scope.pause = function () {
      $scope.audio.pause();
      $scope.playing = false;
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
    
    $scope.onToTheNextBar = false;
    
    $scope.onCanPlay = function () {
      if ($scope.playing) {
        $scope.audio.play();
        updateTime();
      }
    };
    
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
         if (barNumber >= 0) {
           $scope.currentBar = ctrl.selectedSong.bars[barNumber].toUpperCase();
         }
        }, 0);
      }
      
      if ($scope.playing) {
        raf(updateTime);
      }
     	 
      
    }
  }]);