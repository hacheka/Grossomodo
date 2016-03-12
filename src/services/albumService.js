module.exports = function (ngModule) {
  ngModule.factory("albumService", function () {
    var albums = [];
    
    albums.push(require("json!../data/manifiesto/manifiesto.json"));
    albums.push(require("json!../data/inocentes/inocentes.json"));
    
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