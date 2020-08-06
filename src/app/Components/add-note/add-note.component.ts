import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Service/notes.service';
import Note from 'src/app/Note';
import { Router } from '@angular/router';

@Component({
  selector: 'addNote',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  constructor(private noteService: NotesService, private router:Router) { }

  ngOnInit(): void {
  }
  addNote(title: string, description: string, id: string)
  {
    this.noteService.createNewNote(new Note(title, description, id));
    this.router.navigate(['app-notes']);
  }

}
