import { Component, Input, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-detail',
  templateUrl: 'artist-detail.component.html'
})
export class ArtistDetailComponent implements OnInit {

  @Input() artistId;
  artist;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artist = this.artistService.getArtist(this.artistId);
  }

}
