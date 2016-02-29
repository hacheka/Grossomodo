var app = angular.module('grossomodoApp');

function AlbumController ($scope) {
  var ctrl = this;

  ctrl.songs = [
    {
      order: '01',
      title: 'No hay quien',
      songUrl: 'audio/manifiesto/01-no-hay-quien.mp3'
    },{
      order: '02',
      title: 'Putos amos',
      songUrl: 'audio/manifiesto/02-putos-amos.mp3'
    },{
      order: '03',
      title: 'Phardarthemcee'
    },{
      order: '04',
      title: 'Bienvenido'
    },{
      order: '05',
      title: 'Rottweiler'
    },{
      order: '06',
      title: 'Me la pela.. a mi ke?'
    },{
      order: '07',
      title: 'Grozzeros'
    },{
      order: '08',
      title: 'Arena'
    },{
      order: '09',
      title: 'Welelo skit'
    },{
      order: '10',
      title: 'Ramala'
    },{
      order: '11',
      title: 'Contracultura'
    },{
      order: '12',
      title: 'Llevadme ante vuestro lider'
    },{
      order: '13',
      title: 'Sin piedad'
    },{
      order: '14',
      title: 'Fuego y hielo'
    },{
      order: '15',
      title: 'Outrolophitecus'
    }
  ];
  
  ctrl.selectedSong = ctrl.songs[0];
  
  ctrl.selectSong = function (index) {
    ctrl.selectedSong = ctrl.songs[index];
  }
}

app.component('album', {
  templateUrl: '../../views/album.html',
  controller: AlbumController
});