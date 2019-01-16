import { Injectable } from '@angular/core';
import { Data, TaskList } from './modelos.interface';

@Injectable({
  providedIn: 'root'
})
export class TrelloMethodsService {

  dataTrello: Data;
  constructor() { 
  }

  addList(name: string) {
    let newlist: TaskList = {
      id: Date.now(),
      name: name,
      tasks: []
    };
    try {
      this.dataTrello.lists.push(newlist);
    }
    catch(err) {
      this.dataTrello = {
        lists: [newlist]
      };
    }
    return this.dataTrello;
  }

  deleteList(listDel: TaskList) {
    let pos = this.dataTrello.lists.indexOf(listDel);
    this.dataTrello.lists.splice(pos, 1);
    return this.dataTrello;
  }
}
