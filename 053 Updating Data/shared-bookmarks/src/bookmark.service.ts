import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BookmarkService {

  private baseUrl = 'https://CHANGE-ME.firebaseio.com';

  constructor(private http: Http) { }

  addBookmark(bookmark) {
    const json = JSON.stringify(bookmark);
    return this.http.post(`${this.baseUrl}/bookmarks.json`, json)
      .toPromise();
  }

  getBookmarks() {
    return this.http.get(`${this.baseUrl}/bookmarks.json`)
      .toPromise()
      .then(response => this.convert(response.json()));
  }

  removeBookmark(bookmark) {
    return this.http.delete(`${this.baseUrl}/bookmarks/${bookmark.id}.json`)
      .toPromise();
  }

  updateBookmark(bookmark) {
    const json = JSON.stringify({
      title: bookmark.title,
      url: bookmark.url
    });
    return this.http.patch(`${this.baseUrl}/bookmarks/${bookmark.id}.json`, json)
      .toPromise();
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        title: parsedResponse[id].title,
        url: parsedResponse[id].url
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  }

}
