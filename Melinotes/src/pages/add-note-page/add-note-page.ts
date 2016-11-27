import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AddNotePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-note-page',
  templateUrl: 'add-note-page.html'
})
export class AddNotePage {

  description: any;
  
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AddNotePage Page');
  }

}
