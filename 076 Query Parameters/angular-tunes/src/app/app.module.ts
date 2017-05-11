import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { LoginService } from './login/login.service';
import { LoggedInGuard } from './login/logged-in.guard';
import { LoginFormComponent } from './login/login-form.component';
import { AppComponent } from './app.component';
import { AlbumService } from './album/album.service';
import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistDetailComponent } from './artist/artist-detail.component';
import { ArtistService } from './artist/artist.service';
import { AlbumListComponent } from './album/album-list.component';
import { AlbumDetailComponent } from './album/album-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [
    AppComponent,
    LoginFormComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    AlbumListComponent,
    AlbumDetailComponent
  ],
  providers: [
    ArtistService,
    AlbumService,
    LoginService,
    LoggedInGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
