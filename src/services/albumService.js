module.exports = function (ngModule) {
  ngModule.factory('albumService', function () {
    var albums = [];
    
    var manifiestoInfo = {
      albumName: 'Manifiesto',
      id: 'MNFST',
      cover: 'images/manifiesto-cover.jpg',
      songs: [{
        id: 'MNFST-01',
        order: 1,
        title: 'No hay quien',
        media: [{
            url: 'audio/manifiesto/01-no-hay-quien.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/01-no-hay-quien.ogg',
            type: 'audio/ogg'  
        }],
        songUrl: 'audio/manifiesto/01-no-hay-quien.mp3',
        firstKick: 2.768,
        tempo: 92
      },{
        id: 'MNFST-02',
        order: 2,
        title: 'Putos amos',
        media: [{
            url: 'audio/manifiesto/02-putos-amos.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/02-putos-amos.ogg',
            type: 'audio/ogg'  
        }],
        firstKick: 2.782,
        tempo: 93     
      },{
        id: 'MNFST-03',
        order: 3,
        title: 'Phardarthemcee',
        media: [{
            url: 'audio/manifiesto/03-phardarthemcee.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/03-phardarthemcee.ogg',
            type: 'audio/ogg'  
        }],
      },{
        id: 'MNFST-04',
        order: 4,
        title: 'Bienvenido',
        media: [{
            url: 'audio/manifiesto/04-bienvenido.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/04-bienvenido.ogg',
            type: 'audio/ogg'  
        }]
      },{
        id: 'MNFST-05',     
        order: 5,
        title: 'Rottweiler',
        media: [{
            url: 'audio/manifiesto/05-rottweiler.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/05-rottweiler.ogg',
            type: 'audio/ogg'  
        }]
      },{
        id: 'MNFST-06',
        order: 6,
        title: 'Me la pela.. a mi ke?',
        media: [{
            url: 'audio/manifiesto/06-me-la-pela-a-mi-ke.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/06-me-la-pela-a-mi-ke.ogg',
            type: 'audio/ogg'  
        }]
      },{
        id: 'MNFST-07',
        order: 7,
        title: 'Grozzeros',
        media: [{
            url: 'audio/manifiesto/07-grozzeros.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/07-grozzeros.ogg',
            type: 'audio/ogg'  
        }]
      },{
        id: 'MNFST-08',
        order: 8,
        title: 'Arena',
        media: [{
            url: 'audio/manifiesto/08-arena.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/08-arena.ogg',
            type: 'audio/ogg'  
        }]
      },{
        id: 'MNFST-09',
        order: 9,
        title: 'Welelo skit',
        media: [{
            url: 'audio/manifiesto/09-welelo-skit.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/09-welelo-skit.ogg',
            type: 'audio/ogg'  
        }]
      },{
        id: 'MNFST-10',
        order: 10,
        title: 'Ramala',
        media: [{
            url: 'audio/manifiesto/10-ramala.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/10-ramala.ogg',
            type: 'audio/ogg'  
        }]
      },{
        id: 'MNFST-11',
        order: 11,
        title: 'Contracultura',
        media: [{
            url: 'audio/manifiesto/11-contracultura.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/11-contracultura.ogg',
            type: 'audio/ogg'  
        }]
      },{
        id: 'MNFST-12',
        order: 12,
        title: 'Llevadme ante vuestro lider',
        media: [{
            url: 'audio/manifiesto/12-llevadme-ante-vuestro-lider.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/12-llevadme-ante-vuestro-lider.ogg',
            type: 'audio/ogg'  
        }]
      },{
        id: 'MNFST-13',
        order: 13,
        title: 'Sin piedad',
        media: [{
            url: 'audio/manifiesto/13-sin-piedad.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/13-sin-piedad.ogg',
            type: 'audio/ogg'  
        }]
      },{
        id: 'MNFST-14',
        order: 14,
        title: 'Fuego y hielo',
        media: [{
            url: 'audio/manifiesto/14-fuego-y-hielo.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/14-fuego-y-hielo.ogg',
            type: 'audio/ogg'  
        }]
      },{
        id: 'MNFST-15',
        order: 15,
        title: 'Outrolophitecus',
        media: [{
            url: 'audio/manifiesto/15-outrolophitecus.mp3',
            type: 'audio/mp3'  
          },{
            url: 'audio/manifiesto/15-outrolophitecus.ogg',
            type: 'audio/ogg'  
        }]
      }]
    };
    
    albums.push(manifiestoInfo);
    
    var inocentesInfo = {
      albumName: 'Inocentes',
      id: 'INOC',
      cover: 'images/inocentes-cover.jpg',    
      songs: [{
        id: 'INOC-01',
        order: 1,
        title: 'Intro',
      },{
        id: 'INOC-02',
        order: 2,
        title: 'Ultraboomap'    
      },{
        id: 'INOC-03',
        order: 3,
        title: 'Inocentes'
      },{
        id: 'INOC-04',
        order: 4,
        title: 'Antes del colapso'
      },{
        id: 'INOC-05',     
        order: 5,
        title: 'Música'
      },{
        id: 'INOC-06',
        order: 6,
        title: 'Hojas en blanco'
      },{
        id: 'INOC-07',
        order: 7,
        title: 'Ya se sabe'
      },{
        id: 'INOC-08',
        order: 8,
        title: 'Adamantio'
      },{
        id: 'INOC-09',
        order: 9,
        title: 'Q.M.V.A.C.'
      },{
        id: 'INOC-10',
        order: 10,
        title: 'Veintitantos'
      },{
        id: 'INOC-11',
        order: 11,
        title: 'Vida en Martes'
      },{
        id: 'INOC-12',
        order: 12,
        title: 'Locomotion'
      },{
        id: 'INOC-13',
        order: 13,
        title: 'El Tribaile'
      },{
        id: 'INOC-14',
        order: 14,
        title: 'Clásico'
      }]
    };

    albums.push(inocentesInfo);
    
    var fetchAlbums = function () {
      return albums.map(function (album) {
        return {
          name: album.albumName,
          id: album.id,
          numberOfSongs: album.songs.length,
          cover: album.cover
        };
      });
    };
    
    var fetchAlbum = function (albumId) {
      var fetchedAlbum = {};
      
      albums.forEach(function (item) {
        if (item.id === albumId) {
          fetchedAlbum = item;
        }
      });
      
      return fetchedAlbum;
    }

    return {
      fetchAlbums: fetchAlbums,
      fetchAlbum: fetchAlbum
    };
  });
};