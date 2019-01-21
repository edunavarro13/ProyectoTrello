import {
  Component
} from '@angular/core';
import {
  TrelloApiService
} from '../trello-api.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent {

  usernameLogin: string = '';
  passLogin: string = '';
  constructor(private apiService: TrelloApiService, private routerLog: Router) {}

  login() {    
    if (this.usernameLogin.trim() !== '' && this.passLogin.trim() !== '') {
      this.apiService.login(this.usernameLogin.trim(), this.passLogin.trim()).then(response => {
        this.routerLog.navigate(['/trello']);
      }).catch(console.error);
    } else {
      alert(`Username and password can not be empty.`);
    }
  }

}
