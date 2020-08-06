import { Injectable } from '@angular/core';
import Note from '../Note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesList: Note[]=[];
  constructor()
  {
    console.log(this.notesList);
  }
  
  createNewNote(newNote: Note)
  {
    this.notesList.push(newNote);
  }
  removeNote(note: Note)
  {
    let index=this.notesList.findIndex(notes=>notes===note)
    this.notesList.splice(index,1);
  }
  returnNotes()
  {
    return this.notesList;
  }
}
