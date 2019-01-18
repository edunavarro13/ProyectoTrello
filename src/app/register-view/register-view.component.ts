import { Component } from '@angular/core';
import { TrelloApiService } from '../trello-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent {

  usernameRegister: string;
  passRegister: string;
  constructor(private apiService: TrelloApiService, private routeAtr: Router) { }

  register() {
    this.apiService.register(this.usernameRegister.trim(), this.passRegister.trim())
    .then( response => {
      if(confirm(`Your user ${this.usernameRegister} is registered`)) {
        this.routeAtr.navigate(['/login']);
      }
    });
  }

}
