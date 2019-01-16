import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrelloPageComponent } from './trello-page/trello-page.component';

const routes: Routes = [
  { path: 'trello', component: TrelloPageComponent },
  { path: '', redirectTo: '/trello', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
