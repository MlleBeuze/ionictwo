import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddNotePage } from '../pages/add-note-page/add-note-page';
import { ViewNotePage } from '../pages/view-note-page/view-note-page';
import { Notes } from '../providers/notes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddNotePage,
    ViewNotePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddNotePage,
    ViewNotePage
  ],
  providers: [Notes]
})
export class AppModule {}
