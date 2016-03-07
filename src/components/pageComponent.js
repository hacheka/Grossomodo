var app = angular.module('grossomodoApp');

function PageController ($scope, albumService, lyricsService) {
  var ctrl = this;
  var selectedIndex = 0;
  
  ctrl.albums = albumService.fetchAlbums();
  ctrl.selectedAlbum = null;
  ctrl.selectedSong = null;
  ctrl.selectorVisible = true;
  ctrl.playlistVisible = false;
  
  ctrl.selectSong = function (index) {
    var lyrics = null;
    
    if (ctrl.selectedAlbum !== null && typeof ctrl.selectedAlbum.songs !== 'undefined') {
      if (index > - 1 && index < ctrl.selectedAlbum.songs.length) {
        selectedIndex = index;
        ctrl.selectedSong = ctrl.selectedAlbum.songs[index];
        lyrics = lyricsService.fetchLyrics(ctrl.selectedSong.id);
        if (lyrics !== null) {
          ctrl.selectedSong.bars = lyrics.bars;
        }
      }
    }    
  };
  
  ctrl.selectAlbum = function (id) {
    ctrl.selectedAlbum = albumService.fetchAlbum(id);
    ctrl.selectorVisible = false;
    ctrl.playlistVisible = true;
  }
  
  ctrl.showDiscography = function () {
    console.log('showDiscography()');
    ctrl.selectorVisible = true;
    ctrl.playlistVisible = false;
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

app.component('page', {
  templateUrl: '/views/partials/pagePartial.html',
  controller: PageController
});