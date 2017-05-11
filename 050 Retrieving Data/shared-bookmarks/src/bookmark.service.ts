import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BookmarkService {

  private baseUrl = 'https://CHANGE-ME.firebaseio.com';

  constructor(private http: Http) { }

  getBookmarks() {
    return this.http.get(`${this.baseUrl}/bookmarks.json`)
      .toPromise()
      .then(response => this.convert(response.json()));
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
