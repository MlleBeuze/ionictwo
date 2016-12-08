import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

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

  constructor(public viewCtrl: ViewController, private navParams: NavParams) {
    console.log(this.navParams.get("description"));
    this.description = this.navParams.get("description");
  }

  save(): void {
  }

  close(): void {
    this.viewCtrl.dismiss();
  }
}
