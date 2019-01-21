import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrelloPageComponent } from './trello-page/trello-page.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';

const routes: Routes = [
  { path: 'trello', component: TrelloPageComponent },
  { path: 'register', component: RegisterViewComponent },
  { path: 'login', component: LoginViewComponent },
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
