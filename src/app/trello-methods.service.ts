import { Injectable } from '@angular/core';
import { Data, TaskList } from './modelos.interface';

@Injectable({
  providedIn: 'root'
})
export class TrelloMethodsService {

  dataTrello: Data;
  constructor() { 
  }

  getData() {
    return this.dataTrello;
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
  }

  deleteList(listDel: TaskList) {
    this.dataTrello.lists = this.dataTrello.lists.filter(elem => elem.id !== listDel.id);
  }

  updateList(listDel: TaskList) {
    this.dataTrello.lists = this.dataTrello.lists.map(elem => {
      if(elem.id == listDel.id) {
        return listDel;
      }
      else {
        return elem;
      }
    })
  }
}
