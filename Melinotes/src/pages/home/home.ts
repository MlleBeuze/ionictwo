import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { AddNotePage } from '../add-note-page/add-note-page';
import { Notes } from '../../providers/notes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: any;

  constructor(public nav: NavController, public noteService: Notes, public modalCtrl: ModalController) {

  }

  ionViewDidLoad(){

    this.noteService.getNotes().then((data) => {
      console.log("home.ts: ionViewDidLoad");
      console.log(data);
      this.notes = data;
    });

  }

  addNote(){

    let modal = this.modalCtrl.create(AddNotePage);

    modal.onDidDismiss(note => {
      if(note){
        this.notes.push(note);
        this.noteService.createNote(note);
      }
    });

    modal.present();

  }

  deleteNote(note){

      //Remove locally
      let index = this.notes.indexOf(note);

      if(index > -1){
        this.notes.splice(index, 1);
      }

    //Remove from database
    this.noteService.deleteNote(note._id);
  }

}
