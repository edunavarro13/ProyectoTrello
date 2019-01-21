import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TrelloApiService } from './trello-api.service';
import { TrelloMethodsService } from './trello-methods.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrelloPageComponent } from './trello-page/trello-page.component';
import { ListsComponent } from './lists/lists.component';
import { CardTasksComponent } from './card-tasks/card-tasks.component';

import { HttpClientModule } from '@angular/common/http';

import { ColorPickerModule } from 'ngx-color-picker';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TrelloPageComponent,
    ListsComponent,
    CardTasksComponent,
    LoginViewComponent,
    RegisterViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorPickerModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [TrelloMethodsService, TrelloApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
