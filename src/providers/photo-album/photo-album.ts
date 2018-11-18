import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PhotoAlbumProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhotoAlbumProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PhotoAlbumProvider Provider');
  }

  getPicture() {
    return this.http.get('https://popoints-backend.herokuapp.com/api/containers/evidence/files');
  }

}
