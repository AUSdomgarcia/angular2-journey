import { Component, EventEmitter, Output } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-list',
  templateUrl: 'artist-list.component.html'
})
export class ArtistListComponent {

  @Output() artistSelect = new EventEmitter();
  artists;

  constructor(artistService: ArtistService) {
    this.artists = artistService.getArtists();
  }

}
