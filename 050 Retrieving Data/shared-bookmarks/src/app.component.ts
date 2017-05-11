import { Component } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'bookmark-app',
  template: `
    <div class="panel panel-default">
      <table class="table table-striped">
        <tr *ngFor="let bookmark of bookmarks">
          <td>
            <a [href]="bookmark.url" target="_blank">{{bookmark.title}}</a>
          </td>
        </tr>
      </table>
    </div>
  `,
})
export class AppComponent {

  bookmarks = [];

  constructor(private bookmarkService: BookmarkService) {
    this.bookmarkService.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks);
  }

}
