import { Component, Input } from '@angular/core';

@Component({
  selector: 'bookmark-list',
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
export class BookmarkListComponent {

  @Input() bookmarks = [];

}
