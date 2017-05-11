export class ArtistService {

  getArtists() {
    return Object.keys(this.artists).map(id => {
      const artist = this.artists[id];
      return {
        id: artist.id,
        name: artist.name
      };
    });
  }

  getArtist(id) {
    return this.artists[id];
  }

  private artists = {
    "630662ea-1c7d-4208-99fd-ba3afec20f0c": {
      "id": "630662ea-1c7d-4208-99fd-ba3afec20f0c",
      "name": "Amon Tobin",
      "description": "<p><b>Amon Adonai Santos de Araújo Tobin</b> (born February 7, 1972), known as <b>Amon Tobin</b>, is a Brazilian musician, composer and producer of electronic music. He is described as a virtuoso sound designer and is considered to be one of the most influential electronic music artists in the world. He is noted for his unusual methodology in sound design and music production. He has released seven major studio albums under the London-based Ninja Tune record label.</p><p>In 2007 he released <i>Foley Room</i>, an album based entirely on the manipulation of field recordings. His latest album, 2011's <i>ISAM</i>, included \"female\" vocals made from his own processed voice. His music has been used in numerous major motion pictures including <i>The Italian Job</i> and <i>21</i>. Tobin has created songs for several independent films, including the 2006 Hungarian film <i>Taxidermia</i>, and had his music used in other independent films such as the 2002 <i>Cannes Palme d'Or</i> nominated <i>Divine Intervention</i>. A selection of his tracks were featured in commercial bumps on Toonami and in the 2005 anime <i>IGPX</i>, and he produced the musical scores to critically acclaimed video games <i>Tom Clancy's Splinter Cell: Chaos Theory</i> by Ubisoft in 2005, and Sucker Punch's <i>Infamous</i> in 2009.</p>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Amon_tobin_luxemburg.jpg/250px-Amon_tobin_luxemburg.jpg",
      "albums": [
        {
          "id": "c1f40fac-2abd-3f0c-a635-26d166766b46",
          "title": "Bricolage",
          "year": 1997
        },
        {
          "id": "aa65edf4-9f38-38de-bab1-c85c993449ef",
          "title": "Permutation",
          "year": 1998
        },
        {
          "id": "b940d672-89bb-340f-89cd-4a92820e3135",
          "title": "Supermodified",
          "year": 2000
        }
      ]
    },
    "9a709693-b4f8-4da9-8cc1-038c911a61be": {
      "id": "9a709693-b4f8-4da9-8cc1-038c911a61be",
      "name": "Bonobo",
      "description": "<p><b>Simon Green</b> (born 30 March 1976), known by his stage name <b>Bonobo</b>, is a British musician, producer and DJ based in Los Angeles.</p><p>Green has recorded and performed solo DJ sets under the name Mr Blue and as Barakas together with Robert Luis from Tru Thoughts as Nirobi and Barakas.</p>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bonobo_at_SeOne_London_March_2008_-_1.JPG/250px-Bonobo_at_SeOne_London_March_2008_-_1.JPG",
      "albums": [
        {
          "id": "72a7d9d5-7fcd-3b37-ae56-4ef1d5abb2f3",
          "title": "Animal Magic",
          "year": 2000
        },
        {
          "id": "6edbf73e-6078-3679-a4b9-280a13cf55a8",
          "title": "Dial 'M' for Monkey",
          "year": 2003
        }
      ]
    },
    "cedd2cc6-c77f-4104-b333-0547b29e0b71": {
      "id": "cedd2cc6-c77f-4104-b333-0547b29e0b71",
      "name": "Coldcut",
      "description": "<p><b>Coldcut</b> are an English electronic music duo composed of Matt Black and Jonathan More. Credited as pioneers for pop sampling in the ‘80s, Coldcut are also considered the first stars of UK electronic dance music  due to their innovative style, which featured cut-up samples of hip-hop, breaks, jazz, spoken word and various other types of music, as well as video and multimedia. According to <i>Spin</i>, \"in ’87 Coldcut pioneered the British fad for ‘DJ records’\".</p><p>Coldcut's records first introduced the public to pop artists Yazz and Lisa Stansfield, through which these artists achieved pop chart success. In addition, Coldcut has remixed and created productions on tracks by the likes of Eric B &amp; Rakim, James Brown, Queen Latifah, Eurythmics, INXS, Steve Reich, Blondie, The Fall, Pierre Henry, Nina Simone, Fog, Red Snapper, and BBC Radiophonic Workshop.</p><p>Beyond their work as a production duo, Coldcut are the founders of Ninja Tune, an independent record label in London, England (with a satellite office in Montreal) with an overall emphasis on encouraging interactive technology and finding innovative uses of software. The label’s first releases (the first four volumes of DJ Food - 'Jazz Brakes') were produced by Coldcut in the early 90s, and composed of instrumental hip-hop cuts that led the duo to help pioneer the trip hop genre, with artists such as Funky Porcini, The Herbaliser and DJ Vadim.</p>",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Matt_Black_-_Coldcut_%28Vienna_2006%29.jpg/250px-Matt_Black_-_Coldcut_%28Vienna_2006%29.jpg",
      "albums": [
        {
          "id": "b576dcd9-b1db-3104-a730-f732a86ed60d",
          "title": "What's That Noise?",
          "year": 1989
        }
      ]
    }
  };

}
