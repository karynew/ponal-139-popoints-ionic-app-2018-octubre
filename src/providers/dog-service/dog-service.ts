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

  getDogs(){
    return this.http.get('http://localhost:3000/api/dogs');
  }
  postDogs(postData): Observable<any>{
    return this.http.post(`http://localhost:3000/api/dogs`, postData);
  }

  //https://blog.ng-classroom.com/blog/ionic2/rest-api-with-ionic/

}