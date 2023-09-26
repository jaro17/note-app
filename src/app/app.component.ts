import {Component} from '@angular/core';
import {INotes} from "./components/note/notes";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    visible: boolean = false;
    titleInput: string = "";
    contentInput: string = "";
    notes: INotes[] = [
        {id: 1, title: 'Title 1', content: 'Content 1'},
    ];
    editingNoteId: number | null = null;
    creatingNewNote: boolean = false;

    showDialog(): void {
        this.visible = true;
    }

   // Method to add a new note with a dynamic ID or update an existing note
    addNewNote(): void {
        if (this.editingNoteId !== null) {
      // Find the index of the note being edited
      const editedNoteIndex = this.notes.findIndex((note) => note.id === this.editingNoteId);

      if (editedNoteIndex !== -1) {
        // Update the existing note with the edited values
        this.notes[editedNoteIndex].title = this.titleInput;
        this.notes[editedNoteIndex].content = this.contentInput;
        this.clearInputs();
        this.visible = false; // Close the dialog after saving
        this.editingNoteId = null; // Reset the editing state
      }
    } else {
      // Handle adding a new note
      const newId = this.getNextAvailableId();
      const newNote: INotes = { id: newId, title: this.titleInput, content: this.contentInput };
      this.notes.push(newNote);
      this.clearInputs();
      this.visible = false; // Close the dialog after adding a new note
    }
    this.creatingNewNote = false;
    }

    // Function to calculate the next available ID
    getNextAvailableId(): number {
        return Date.now();
    }

    private clearInputs(): void {
        this.titleInput = '';
        this.contentInput = '';
    }

    onEditNote(noteId: number): void {
        this.editingNoteId = noteId;
        this.creatingNewNote = false;

        // Find the note by ID
        const editedNote = this.notes.find((note) => note.id === noteId);

        // Update the titleInput and contentInput with the values of the selected note
        if (editedNote) {
            this.titleInput = editedNote.title;
            this.contentInput = editedNote.content;
        }
        this.showDialog(); // Open the existing p-dialog for editing
    }


    // Calculate the number of notes
    getNumberOfNotes(): string {
        const numberOfNotes = this.notes.length;
        return numberOfNotes === 1 ? '1 Note' : `${numberOfNotes} Notes`;
    }
}
