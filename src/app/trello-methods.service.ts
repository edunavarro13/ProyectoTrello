import {
  Injectable
} from '@angular/core';
import {
  Data,
  TaskList,
  Task
} from './modelos.interface';

@Injectable({
  providedIn: 'root'
})
export class TrelloMethodsService {

  dataTrello: Data;
  constructor() {}

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
    } catch (err) {
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
      if (elem.id == listDel.id) {
        return listDel;
      } else {
        return elem;
      }
    });
  }

  addTask(name: string, listElem: TaskList) { 
    let newtask: Task = {
      idList: listElem.id,
      idTask: Date.now(),
      name: name,
      description: '',
      complete: false,
      color: '#ffffff'
    };
    let pos = this.dataTrello.lists.indexOf(listElem);
    try {
      this.dataTrello.lists[pos].tasks.push(newtask);
    } catch (err) {
      this.dataTrello.lists[pos] = {
        id: this.dataTrello.lists[pos].id,
        name: this.dataTrello.lists[pos].name,
        tasks: [newtask]
      };
    }
  }
}
