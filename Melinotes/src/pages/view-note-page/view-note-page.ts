import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the ViewNotePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-view-note-page',
  templateUrl: 'view-note-page.html'
})
export class ViewNotePage {

  description: any;

  constructor(public viewCtrl: ViewController) {}

  save(): void {

    let note = {
      description: this.description
    };

    this.viewCtrl.dismiss(note);

  }

  close(): void {
    this.viewCtrl.dismiss();
  }
}
