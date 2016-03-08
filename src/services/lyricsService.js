module.exports = function (ngModule) {
  ngModule.factory('lyricsService', function () {
    var lyrics = [];
    
    var putosAmos = {
      id: 'MNFST-02',
      bars: [
        'Ha, Ha...  chiki chiki',
        'Hacheka y Xtra... trtrtrtrtragos',
        'Ha, ha, ha... ha, ha, ha, ha, ha',
        'Hacheka y Xtra, tra, tra, tagos. Yeah!',
        '... se veía venir, eeeh',
        'eeh eeh eeh, puños arriba! Ah!',
        '',
        'Hacheka y Xtragos... Bien!',
        'Darnos tregua, lenguas ambiguas,',
        'estamos a leguas, por qué? no averiguas?',
        'es igual, si guapas palabras son exiguas,',
        'igual es que jamás pillas cábalas antiguas. Hay',
        'tantas plantas carnívoras, tantas',
        'canciones frívolas, tantas víboras cantan, yo',
        'vivo la vida sin píldoras, tú ni el',
        'tipo das, mi mundo y tu en las antípodas.',
        'Pasen al tercer hemisferio, esto es',
        'rap etéreo con este león en estéreo,',
        'misterios tal y como en ministerioso o',
        'tal y como en monasterios? mi evangelio,',
        'me las ingenio y congenio con genios,',
        'quizás no veas en los medios esta rebelión,',
        'congelo el helio, cógelo, en serio,',
        'eh tío, entre el griterío mi criterio,',
        'como un critter te hice la púa, actúa,',
        'no te irrites, tan solo evalúate y evacua,',
        'difundan, mas no me confundan con ful mas son',
        'fugas de gas chungas, desenfunda, yo',
        'traje mi kit de rap: mente y cuaderno',
        'nada que ver, no, con cualquier tierno moderno',
        'de acuerdo?, mucho mejor muerto, que muermo,',
        'si duermo sueño con rap, estoy enfermo,',
        'Xtragos, os ha drogado a lo dragon khan',
        'os ha logrado doblegar a lo sandokan,',
        'tu charlatán jamás vas a manchar al chaman,',
        'aunque me vengas de sharuman.',
        'Hacheka lo vive y escribe, ¿me recibe? Sí',
        'Xtragos escribe y se desinhibe, ¿por qué? Por que',
        'es libre. Ustedes mejor que se retiren,',
        'No respiren, expiren, yo estaré bien, descuiden.',
        'Tu tumba te cavas si no paras en trabas,',
        'si las malas babas disparas al azar.',
        'Pasa lo que pasa si tratas de cazar más',
        'masas de pasta con bandas sin casta.',
        'Si te faltan tablas mejor quédate en casa,',
        'de noche al alba pasa con las manos en la masa,',
        'mejora esas trazas. No es una amenaza mas',
        'tan sólo se atrasa el que se toma esto a guasa. Hoy ',
        'por hoy se requiere un nivel, ¿tú de que fardas?',
        '¿No ves que lo que hay en tu papel no llega al estándar?',
        'Lo inmortal no es para aquel que está de parranda. Las cosas',
        'claras... pero en verlas tardas.',
        'Emcees no se retractan cuando de la vida retratar',
        'se trata con palabras cubiertas de plata,',
        'si hace faltan pactan, pero con la esencia intacta y',
        'con su ciencia exacta impactan. Chaval, lo captas?',
        'La historia es dejar marca es todas las comarcas,',
        'rimas dar a doquier que quemen como el magma.',
        'Trae toneladas de palabras encadenadas y en',
        'cada sílaba dada ofrece calidad… dad.',
        'No valen mecenas ni refugiarse en sus faldas,',
        'varias decenas de emecés aquí no encajan,',
        'márchense a casa, háganse una paja, tras',
        'escuchar a Hacheka séquense la baba.',
        'Hacheka, Xtragos, putos amos.',
        'Osamos daros kilogramos, tened claro',
        'que es imposible llegar a odiarnos, tened',
        'claro, que es imposible llegar a amarnos. Son!',
        'Hacheka, Xtragos, putos amos.',
        'Osamos daros kilogramos, tened claro',
        'que es imposible llegar a odiarnos, tened',
        'claro, que es imposible llegar a amarnos.',
        'Cuando tantos bardos lanzan fardos',
        'de párrafos tan malos tan de vez en cuando…',
        '¿Falla algo y por eso dan sabor amargo?',
        '¿Es que se estancan o es que se están cansando? Por',
        'tanto me encargo de mi trabajo ipso facto, de',
        'despertarlos sin retardo de su letargo, de',
        'dejar intacto el cargo de ser el más apto, de',
        'narcotizar al hardcore desde este palco.',
        'Cuando mi plan planto estallan llantos de',
        'tanto cazador harto de este leopardo.',
        'Se ocultan en los flancos, intentan hacer blanco, pero',
        'escucha, chato, tal como ataco, marco. Yo',
        'mando sea cuando lo quemes en tu cuarto',
        'o estés en un antro con aroma de Cointreau.',
        'Para despertar tu ardor sólo van a bastar dos',
        'bastardos llamados... Hacheka y Xtragos.',
        'Estamos? dos moles os molestamos',
        'mi banda es la mas ancha. Conectamos?',
        'ambos jambos demostramos,',
        'entramos en tramos complicaos y os picamos,',
        'compi, compitamos por fin, lo complicamos',
        'por ti, nos implicamos en el barro marrón,',
        'compi, compilamos emepetres que te pres...,',
        '...tamos y sientes estrés digamos, no?',
        'Sigamos, vamos a mostraros a dos amos',
        'adosados a dos micros con litros de fango, con!',
        'kilos de guano afgano vamos al grano, ya',
        'me subestimaron si de malo me tacharon, Putos',
        'amos! sonamos igual que pesamos, Kilo...',
        '...gramos! pensamos igual que soñamos, soy',
        'Xtragos os hago el amor, orgasmo, os',
        'gano con órdagos sobre órganos hammond!',
        'Hacheka, Xtragos, putos amos.',
        'Osamos daros kilogramos, tened claro',
        'que es imposible llegar a odiarnos, tened',
        'claro, que es imposible llegar a amarnos.',
        'Hacheka, Xtragos, putos amos.',
        'Osamos daros kilogramos, tened claro',
        'que es imposible llegar a odiarnos, tened',
        'claro, que es imposible llegar a amarnos.'        
      ]
    };
    
    lyrics.push(putosAmos);
    
    var fetchLyrics = function (lyricsId) {
      var fetchedLyrics = null;
      
      lyrics.forEach(function (item) {
        if (item.id === lyricsId && fetchedLyrics === null) {
          fetchedLyrics = item;
        }
      });
      
      return fetchedLyrics;
    }

    return {
      fetchLyrics: fetchLyrics
    };
  });
};