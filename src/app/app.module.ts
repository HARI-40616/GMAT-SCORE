import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { NavbarComponent } from './components/score/score.component'





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
