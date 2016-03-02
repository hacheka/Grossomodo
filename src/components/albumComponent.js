var app = angular.module('grossomodoApp');

function AlbumController ($scope, albumService, lyricsService) {
  var ctrl = this;
  var selectedIndex = 0;
  
  ctrl.selectedAlbum = albumService.fetchAlbum('MNFST');
  
  ctrl.selectSong = function (index) {
    var lyrics = null;
    
    if (index > - 1 && index < ctrl.selectedAlbum.songs.length) {
      selectedIndex = index;
      ctrl.selectedSong = ctrl.selectedAlbum.songs[index];
      lyrics = lyricsService.fetchLyrics(ctrl.selectedSong.id);
      if (lyrics !== null) {
        ctrl.selectedSong.bars = lyrics.bars;
      }
    }
  };
  
  ctrl.previousSong = function () {
    if (selectedIndex > 0) {
      selectedIndex--;
    }
    ctrl.selectSong(selectedIndex);
  };

  ctrl.nextSong = function () {
    if (selectedIndex < ctrl.selectedAlbum.songs.length - 1) {
      selectedIndex++;
    }
    ctrl.selectSong(selectedIndex);
  };
  
  ctrl.selectSong(selectedIndex);
}

app.component('album', {
  templateUrl: '../../views/album.html',
  controller: AlbumController
});