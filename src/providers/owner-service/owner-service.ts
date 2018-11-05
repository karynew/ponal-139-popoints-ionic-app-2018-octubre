import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the OwnerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OwnerServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello OwnerServiceProvider Provider');
  }

  postPeople(dataPeople): Observable<any>{
    return this.http.post(`http://localhost:3000/api/people`, dataPeople);
  }

}
