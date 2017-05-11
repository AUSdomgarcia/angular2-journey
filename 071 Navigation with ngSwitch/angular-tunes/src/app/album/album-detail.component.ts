import { Component } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'album-detail',
  templateUrl: 'album-detail.component.html'
})
export class AlbumDetailComponent {

  album;
  albumId = 'c1f40fac-2abd-3f0c-a635-26d166766b46';

  constructor(private albumService: AlbumService) {
    this.album = this.albumService.getAlbum(this.albumId);
  }

}
