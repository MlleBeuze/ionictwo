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
    console.log("here1");
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      console.log("here2");
      this.http.get('http://localhost:3000/api/notes')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          console.log("here3");
          console.log(this.data);
        },
        err => {console.log("here4");console.log(err);this.logError(err);}
      );
    });

  }

  createNote(note){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log("Add note");
    this.http.post('http://localhost:3000/api/notes', JSON.stringify(note), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteNote(id){

    this.http.delete('http://localhost:3000/api/notes/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

}
