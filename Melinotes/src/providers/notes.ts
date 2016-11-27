import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Notes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Notes {

  data: any;

  constructor(public http: Http) {
    console.log('Hello Notes Provider');
    this.data = null;
  }

  getNotes(){

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('http://localhost:3000/api/notes')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  createNote(review){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/api/notes', JSON.stringify(review), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteNote(id){

    this.http.delete('http://localhost:3000/api/notes/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }

}
