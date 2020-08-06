import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../Service/notes.service';
import Note from 'src/app/Note';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notesList: Note[];
  constructor(private noteService : NotesService, private router:Router) 
  {
    this.notesList=this.noteService.returnNotes();
  }

  ngOnInit(): void {
  }
  // createNote(title: string, description: string, id: string)
  // {
  //   let note=new Note(title, description, id);
  //   this.noteService.createNewNote(note);
  //   console.log('added succesfully', note);
  // }
  navigateToAdd()
  {
    this.router.navigate(['/addNote']);
  }
  deleteNote(note: Note)
  {
    this.noteService.removeNote(note)
  }

}
