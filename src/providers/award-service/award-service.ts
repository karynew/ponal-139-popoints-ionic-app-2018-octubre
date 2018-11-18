import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AwardServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AwardServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AwardServiceProvider Provider');
  }
  getAward(){
    return this.http.get('https://popoints-backend.herokuapp.com/api/awards');
    
  }
}
