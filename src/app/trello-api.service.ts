import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  reject
} from 'q';

@Injectable({
  providedIn: 'root'
})
export class TrelloApiService {

  jwt: string;
  headers: object;

  constructor(private api: HttpClient) {}

  register(username: string, password: string) {
    return this.api.post("https://apitrello.herokuapp.com/users", {
      username,
      password
    }).toPromise();
  }

  login(username: string, password: string) {
    return new Promise((resolve, reject) =>
      this.api.post("https://apitrello.herokuapp.com/users/login", {
        username,
        password
      }).toPromise()
      .then(response => {
        reject('User not found');
      }).catch(badResponse => {
        if (badResponse.status === 200) {
          this.jwt = badResponse.error.text;
          this.headers = {
            headers: {
              Authorization: `Bearer ${this.jwt}`
            }
          }
          resolve(badResponse.error.text);
        } else if (badResponse.status === 401) {
          reject(`Wrong password`);
        } else {
          reject(`Try again`);
        }
      }));
  }
  getLists() {
    this.api.get('https://apitrello.herokuapp.com/lists', this.headers).toPromise()
    .then(console.log).catch(console.error);
  }
}
