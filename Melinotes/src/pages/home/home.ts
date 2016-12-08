import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { AddNotePage } from '../add-note-page/add-note-page';
import { ViewNotePage } from '../view-note-page/view-note-page';
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
    this.loadNotes();
  }

  loadNotes(){
    this.noteService.getNotes().then((data) => {
      this.notes = data;
    });
  }

  getSingleNote(note){
    this.noteService.getSingleNote(note.id).then((data) => {
      let modal = this.modalCtrl.create(ViewNotePage, data);
      modal.present(ViewNotePage);
    });
  }

  addNote(){
    let modal = this.modalCtrl.create(AddNotePage);

    modal.onDidDismiss(note => {
      if(note){
        this.noteService.createNote(note).then((data) => {
          this.notes.push(data);
        });
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
    this.noteService.deleteNote(note.id);
  }

}
