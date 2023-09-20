import {Component, Input} from '@angular/core';
import {INotes} from "./notes";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  @Input() notes: INotes[] = [];
}
