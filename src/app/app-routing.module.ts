import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNoteComponent } from './Components/add-note/add-note.component';
import { NotesComponent } from './Components/notes/notes.component';

const routes: Routes = 
[
  {component: AddNoteComponent, path: 'addNote'},
  {component: NotesComponent, path: ''},
  {component: NotesComponent, path: 'app-notes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
