import { Component } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-list',
  templateUrl: 'artist-list.component.html'
})
export class ArtistListComponent {

  artists;

  constructor(artistService: ArtistService) {
    this.artists = artistService.getArtists();
  }

}
