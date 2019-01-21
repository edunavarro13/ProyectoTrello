import {
  Injectable
} from '@angular/core';
import {
  Data,
  TaskList,
  Task
} from './modelos.interface';
import { element } from '@angular/core/src/render3';
import { TrelloApiService } from './trello-api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TrelloMethodsService {

  dataTrello: { lists: Array<TaskList> } = {
    lists: [],
  };
  constructor(private api: TrelloApiService, private router: Router) {}

  loadDataFromBackend() {
    this.api
      .getLists()
      .then((rawLists: Array<TaskList>) => {
        const lists = rawLists.map(rawList => ({
          id: rawList.id,
          name: rawList.name,
          tasks: [],
        }));
        Promise.all(
          lists.map(async (list: TaskList) => {
            list.tasks = await this.api.getTasks(list.id);
            list.tasks = list.tasks.map((rawTask: any) => ({
              idList: rawTask.idlist,
              idTask: rawTask.id,
              name: rawTask.task,
              description: '',
              complete: false,
              color: '#ffffff'
            }));
            return list;
          }),
        ).then(lists => {
          this.dataTrello.lists = lists;
        });
      })
      .catch(() => this.router.navigate(['/login']));
  }

  getData() {
    this.loadDataFromBackend();
    return this.dataTrello;
  }

  addList(name: string) {
    this.api.newList(name).then(message => {      
      this.loadDataFromBackend();
    });
  }

  deleteList(listDel: TaskList) {
    this.deleteTask(listDel.id);
    this.api.deleteList(listDel.id).then(message => {      
      this.loadDataFromBackend();
    });
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
    this.api.newTask(listElem.id, name).then(message => {      
      this.loadDataFromBackend();
    });
  }

  deleteTask(taskId: number) {
    this.api.deleteTask(taskId).then(message => console.log(message)).catch(() => {      
      this.loadDataFromBackend();
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
