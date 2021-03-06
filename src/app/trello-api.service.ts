import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Task } from './modelos.interface';

@Injectable({
  providedIn: 'root'
})
export class TrelloApiService {

  jwt: string;
  headers: object = JSON.parse(localStorage.getItem('headers')) || '';

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
          localStorage.setItem('headers', JSON.stringify(this.headers));
          resolve(badResponse.error.text);
        } else if (badResponse.status === 401) {
          reject(`Wrong password`);
        } else {
          reject(`Try again`);
        }
      }));
  }
  getLists(): any {
    return this.api.get('https://apitrello.herokuapp.com/list', this.headers).toPromise();
  }
  getTasks(idlist: number): any {
    return new Promise((resolve, reject) => {
      this.api
        .get('https://apitrello.herokuapp.com/list/tasks/' + idlist, this.headers)
        .toPromise()
        .then(tasks => {
          if (tasks) {
            resolve(tasks);
          } else {
            resolve([]);
          }
        })
        .catch(error => {
          console.log(error);
          resolve([]);
        });
    });
  }
  newList(name: string): any {
    const body = { name };
    return this.api.post('https://apitrello.herokuapp.com/list/', body, this.headers).toPromise();
  }
  deleteList(id: number): any {
    return this.api.delete('https://apitrello.herokuapp.com/list/' + id, this.headers).toPromise();
  }
  updateList(name: string, idList: number) {
    const body = { name };
    return this.api.put(`https://apitrello.herokuapp.com/list/${idList}`, body, this.headers).toPromise();
  }
  newTask(idlist: number, task: string): any {
    const body = { idlist, task };
    return this.api.post('https://apitrello.herokuapp.com/tasks/', body, this.headers).toPromise();
  }
  deleteTask(id: number): any {
    return this.api.delete('https://apitrello.herokuapp.com/list/tasks/' + id, this.headers).toPromise();
  }
  updateTask(task: string, idTask: number) {
    const body = { task };    
    return this.api.put(`https://apitrello.herokuapp.com/tasks/${idTask}`, body, this.headers).toPromise();
  }
}
