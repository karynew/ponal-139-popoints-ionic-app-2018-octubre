import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DogServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DogServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DogServiceProvider Provider');
  }

  getLevelDogs() {
    return this.http.get('http://localhost:3000/api/level_dogs');
  }

  getPeople(){
    return this.http.get('http://localhost:3000/api/people');
  }

  getDogs(){
    return this.http.get('http://localhost:3000/api/dogs');
  }
  postDogs(postData): Observable<any>{
    return this.http.post(`http://localhost:3000/api/dogs`, postData);
  }
  postWalkHour(walkData): Observable<any>{
    return this.http.post(`http://localhost:3000/api/walk_hours`, walkData);
  }

  postImage(imageData): Observable<any> {
    
    const formData: FormData = new FormData();
    formData.append("container", this.dataURItoBlob(imageData), `${this._getNameRandom()}.jpg`);
    
    return this.http.post(`http://localhost:3000/api/containers/evidence/upload`, formData);
  }

  dataURItoBlob(dataURI) {
    const byteString = atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });    
    return blob;
  }

  _getNameRandom()
  {
    // Naming the image
    const date = new Date().valueOf();
    let text = '';
    const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 8; i++) {
      text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
    }

    return text;
  }

  //https://blog.ng-classroom.com/blog/ionic2/rest-api-with-ionic/

}