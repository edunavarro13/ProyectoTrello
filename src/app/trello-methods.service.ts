import {
  Injectable
} from '@angular/core';
import {
  Data,
  TaskList,
  Task
} from './modelos.interface';
import { element } from '@angular/core/src/render3';

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
      color: '#ffffff',
      expiration: null
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

  deleteTask(task: Task) {
    this.dataTrello.lists = this.dataTrello.lists.map( elem => {
      if(elem.id === task.idList) {
        elem.tasks = elem.tasks.filter( taskElem => taskElem.idTask !== task.idTask);
      }
      return elem;
    });
  }

  updateTask(taskUp: Task) {
    this.dataTrello.lists = this.dataTrello.lists.map( elem => {
      if(elem.id === taskUp.idList) {
        elem.tasks = elem.tasks.map( taskElem => {
          if(taskElem.idTask === taskUp.idTask) {
            return taskUp;
          }
          else {
            return taskElem;
          }
        });
      }
      return elem;
    });
  }
}
