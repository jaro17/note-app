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

  showDialog(): void {
    this.visible = true;
  }

  // Method to add a new note with a dynamic ID
  addNewNote(): void {
    const newId = this.getNextAvailableId();
    const newNote: INotes = {id: newId, title: this.titleInput, content: this.contentInput};
    this.notes.push(newNote);
    this.clearInputs();
    this.visible = false; // Hide the dialog and card after adding a new note
  }

  // Function to calculate the next available ID
  getNextAvailableId(): number {
    const maxId = Math.max(...this.notes.map(note => note.id), 0); // Get the maximum ID
    return maxId + 1; // Increment the maximum ID by 1 to get the next available ID
  }

  private clearInputs(): void {
    this.titleInput = '';
    this.contentInput = '';
  }
}
