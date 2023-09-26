import {Component, EventEmitter, Input, Output} from '@angular/core';
import {INotes} from "./notes";

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.css']
})
export class NoteComponent {
    @Input() notes: INotes[] = [];
    @Output() editNote = new EventEmitter<number>();
    @Output() addNote = new EventEmitter<void>(); // Add an event for adding a new note


    onDeleteNote(noteId: number): void {
        // @ts-ignore
        const noteIndex = this.notes.findIndex(note => note.id === noteId);
        if (noteIndex !== -1) {
            this.notes.splice(noteIndex, 1);
        }
    }

    onEditNote(noteId: number): void {
        this.editNote.emit(noteId);
    }

    onAddNote(): void {
        this.addNote.emit(); // Emit the addNote event
    }
}
