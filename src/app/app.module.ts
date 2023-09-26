import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { NgOptimizedImage } from "@angular/common";

import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from 'primeng/inputtextarea';




@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule,
    NgOptimizedImage,
    DialogModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
