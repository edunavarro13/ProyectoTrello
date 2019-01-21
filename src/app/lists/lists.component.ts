import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  TaskList
} from '../modelos.interface';
import {
  TrelloMethodsService
} from '../trello-methods.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  @Input() list: TaskList;
  @Input() serviceFather: TrelloMethodsService;

  modName: boolean = false;
  inputTask: string;

  constructor( private notification: NotificationsService) {}

  ngOnInit() {}

  delete() {
    if (confirm(`Are you sure you want to delete the list: ${this.list.name}?`)) {
      this.serviceFather.deleteList(this.list);
      this.notification.success('SUCCESS!', `The list ${this.list.name} has been successfully deleted.`, {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
      });
    }
  }
  update(ev) {
    // Comprobamos que no sea vacio
    if (ev.target.value.trim()) {
      this.list.name = ev.target.value.trim();
      this.serviceFather.updateList(this.list);
      this.modName = false;
    }
    else {
      this.notification.error('ERROR!', `List's name can not be empty!`, {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
      });
    }
  }

  newTask() {
    // Comprobamos que no sea vacio
    if (this.inputTask) {
      this.serviceFather.addTask(this.inputTask, this.list);
      this.inputTask = '';
    }
    else {
      this.notification.error('ERROR!', `Task's name can not be empty!`, {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
      });
    }
  }

}
