export class AlbumService {

  getAlbums() {
    return Object.keys(this.albums).map(id => {
      const album = this.albums[id];
      return {
        id: album.id,
        title: album.title,
        year: album.year,
        artist: album.artist.name
      };
    });
  }

  getAlbum(id) {
    return this.albums[id];
  }

  private albums = {
    "72a7d9d5-7fcd-3b37-ae56-4ef1d5abb2f3": {
      "id": "72a7d9d5-7fcd-3b37-ae56-4ef1d5abb2f3",
      "title": "Animal Magic",
      "year": 2000,
      "artist": {
        "id": "9a709693-b4f8-4da9-8cc1-038c911a61be",
        "name": "Bonobo"
      },
      "image": "https://coverartarchive.org/release-group/72a7d9d5-7fcd-3b37-ae56-4ef1d5abb2f3/front-500.jpg",
      "description": "<p><i><b>Animal Magic</b></i> was the debut studio album by British electronic music artist Bonobo, originally released in 2000 on Tru Thoughts and re-released in 2001 by Ninja Tune.</p>"
    },
    "c1f40fac-2abd-3f0c-a635-26d166766b46": {
      "id": "c1f40fac-2abd-3f0c-a635-26d166766b46",
      "title": "Bricolage",
      "year": 1997,
      "artist": {
        "id": "630662ea-1c7d-4208-99fd-ba3afec20f0c",
        "name": "Amon Tobin"
      },
      "image": "https://coverartarchive.org/release-group/c1f40fac-2abd-3f0c-a635-26d166766b46/front-500.jpg",
      "description": "<p><i><b>Bricolage</b></i> is a 1997 album by the Brazilian electronic music artist Amon Tobin. It was Tobin's second album, the first released under his own name, and his first on the Ninja Tune label. The album was a departure from his first album, <i>Adventures in Foam</i> (as Cujo), incorporating a heavier blend of jazz melodies and intense jungle rhythms. The album was followed by <i>Permutation</i> in 1998.</p><p>The album art for <i>Bricolage</i> depicts part of Alexander Liberman's <i>Olympic Iliad</i> sculpture, located at the base of the Space Needle in Seattle, Washington.</p>"
    },
    "6edbf73e-6078-3679-a4b9-280a13cf55a8": {
      "id": "6edbf73e-6078-3679-a4b9-280a13cf55a8",
      "title": "Dial 'M' for Monkey",
      "year": 2003,
      "artist": {
        "id": "9a709693-b4f8-4da9-8cc1-038c911a61be",
        "name": "Bonobo"
      },
      "image": "https://coverartarchive.org/release-group/6edbf73e-6078-3679-a4b9-280a13cf55a8/front-500.jpg",
      "description": "<p><i><b>Dial 'M' For Monkey</b></i> is the second studio album released in 2003 by the British electronic music artist Bonobo.</p><p>The track \"Flutter\" was the only single released along with the album, with b-sides: \"Pick Up (Four Tet Mix)\" and \"Something (Longer)\".</p>"
    },
    "aa65edf4-9f38-38de-bab1-c85c993449ef": {
      "id": "aa65edf4-9f38-38de-bab1-c85c993449ef",
      "title": "Permutation",
      "year": 1998,
      "artist": {
        "id": "630662ea-1c7d-4208-99fd-ba3afec20f0c",
        "name": "Amon Tobin"
      },
      "image": "https://coverartarchive.org/release-group/aa65edf4-9f38-38de-bab1-c85c993449ef/front-500.jpg",
      "description": "<p><i><b>Permutation</b></i> is the third studio album by Brazilian electronic music producer Amon Tobin and the second under his own name. It was released in 1998, just over a year after <i>Bricolage</i>. The album was a success for Tobin and found him playing sold-out shows at the Montreal Jazz Festival, the Knitting Factory in New York and the Coachella Valley Music and Arts Festival. He went on to release <i>Supermodified</i> in 2000.</p><p>Tobin makes references to David Lynch films a number of times on <i>Permutation</i>. The song \"Like Regular Chickens\" contains a line of dialogue spoken in <i>Eraserhead</i>, while the title of the song \"People Like Frank\" is a line of dialogue from <i>Blue Velvet</i>. The song also samples a part of Angelo Badalamenti's score to that film. \"Fast Eddie\" is probably a reference to Lynch's <i>Lost Highway</i> character Mr. Eddie. On the LP edition of the album, \"Melody Infringement\" is added as a bonus track.</p>"
    },
    "b940d672-89bb-340f-89cd-4a92820e3135": {
      "id": "b940d672-89bb-340f-89cd-4a92820e3135",
      "title": "Supermodified",
      "year": 2000,
      "artist": {
        "id": "630662ea-1c7d-4208-99fd-ba3afec20f0c",
        "name": "Amon Tobin"
      },
      "image": "https://coverartarchive.org/release-group/b940d672-89bb-340f-89cd-4a92820e3135/front-500.jpg",
      "description": "<p><i><b>Supermodified</b></i> is the fourth studio album by Brazilian electronic music producer Amon Tobin, and his third release on Ninja Tune. The album is in some ways a departure from his previous releases as it manages to cover a wider variety of styles. The album was Tobin's most commercially accessible release. Video clips were made for \"Four Ton Mantis\" (directed by Floria Sigismondi) and \"Slowly\".</p><p>Tobin's official website defined the title of the album as:</p><ul><li><i>modification: the act of modifying, state of being modified; change made in vowel by mutation, graphic representation of this</i></li><li><i>super: on the top (of); over; beyond; besides; in addition; exceeding; going beyond; more</i></li></ul>"
    },
    "b576dcd9-b1db-3104-a730-f732a86ed60d": {
      "id": "b576dcd9-b1db-3104-a730-f732a86ed60d",
      "title": "What's That Noise?",
      "year": 1989,
      "artist": {
        "id": "cedd2cc6-c77f-4104-b333-0547b29e0b71",
        "name": "Coldcut"
      },
      "image": "https://coverartarchive.org/release-group/b576dcd9-b1db-3104-a730-f732a86ed60d/front-500.jpg",
      "description": "<p><i><b>What's That Noise?</b></i> is the first album from Coldcut, released in 1989.</p><p>Guests on this album were: Lisa Stansfield on \"People Hold On\" and \"My My Telephone,\" Mark E. Smith (The Fall) on \"(I'm) In Deep\", Junior Reid on \"Stop This Crazy Thing\", Queen Latifah on \"Smoke Dis One\" and Yazz on \"Doctorin' the House\". The album was featured in the book 1001 Albums You Must Hear Before You Die.</p>"
    }
  };

}
