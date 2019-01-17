import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrelloPageComponent } from './trello-page/trello-page.component';
import { ListsComponent } from './lists/lists.component';
import { CardTasksComponent } from './card-tasks/card-tasks.component';

// import { AlertIfModule } from 'alertifyjs';

@NgModule({
  declarations: [
    AppComponent,
    TrelloPageComponent,
    ListsComponent,
    CardTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
