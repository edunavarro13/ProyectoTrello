import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrelloPageComponent } from './trello-page/trello-page.component';
import { ListsComponent } from './lists/lists.component';
import { CardTasksComponent } from './card-tasks/card-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TrelloPageComponent,
    ListsComponent,
    CardTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
