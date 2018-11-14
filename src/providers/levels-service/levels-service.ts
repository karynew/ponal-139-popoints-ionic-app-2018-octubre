import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LevelsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LevelsServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LevelsServiceProvider Provider');
  }

  getLevels() {
    return this.http.get('http://localhost:3000/api/level_dogs');
  }

}
