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
          this.data = data.data;
          resolve(this.data);
        },
        err => {this.logError(err);}
      );
    });

  }

  getSingleNote(id){
    if (this.data.id == id) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:3000/api/notes/' + id)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.data;
          console.log("hrer3");
          console.log(this.data);
          resolve(this.data);
        },
        err => {this.logError(err);}
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
