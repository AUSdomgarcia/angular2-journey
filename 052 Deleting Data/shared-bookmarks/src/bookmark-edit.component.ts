import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bookmark-edit',
  template: `
    <div class="panel panel-primary">
      <div class="panel-body">
        <input type="text" [(ngModel)]="bookmark.title"
          placeholder="Title" style="width: 25%;">
        <input type="text" [(ngModel)]="bookmark.url"
          placeholder="URL" style="width: 50%;">
        <button (click)="onSave()" class="btn btn-primary">Save</button>
      </div>
    </div>
  `,
})
export class BookmarkEditComponent {

  bookmark = {};

  @Output() save = new EventEmitter();

  onSave() {
    this.save.emit(this.bookmark);
  }

}
