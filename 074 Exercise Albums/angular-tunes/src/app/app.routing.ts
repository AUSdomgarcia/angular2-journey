import { RouterModule } from '@angular/router';
import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistDetailComponent } from './artist/artist-detail.component';
import { AlbumListComponent } from './album/album-list.component';
import { AlbumDetailComponent } from './album/album-detail.component';

export const routing = RouterModule.forRoot([
  {
    path: 'artists',
    component: ArtistListComponent
  },
  {
    path: 'artists/:artistId',
    component: ArtistDetailComponent
  },
  {
    path: 'albums',
    component: AlbumListComponent
  },
  {
    path: 'albums/:albumId',
    component: AlbumDetailComponent
  },
  {
    path: '',
    redirectTo: '/artists',
    pathMatch: 'full'
  }
]);
