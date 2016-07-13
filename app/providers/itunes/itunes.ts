import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the Itunes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Itunes {
  data: any;

  constructor(private http: Jsonp) {
    this.data = null;
  }

  search(keyword) {

    return this.http.request(`http://redapesolutions.com/itunes?term=${keyword}&callback=JSONP_CALLBACK`)
        .map(res => res.json())
        .toPromise()
        .then(data => {
          return data.results
        })
  }
}

