import {
  Component,
  Input
} from '@angular/core';
import {
  Task
} from '../modelos.interface';
import {
  TrelloMethodsService
} from '../trello-methods.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-card-tasks',
  templateUrl: './card-tasks.component.html',
  styleUrls: ['./card-tasks.component.scss']
})
export class CardTasksComponent {

  @Input() task: Task;
  @Input() grandFatherService: TrelloMethodsService;

  modTask: boolean = false;
  watchTask: boolean = false;
  modDescTask: boolean = false;

  color: string;
  constructor( private notification: NotificationsService) {}

  deleteCardTask() {
    if (confirm(`Are you sure you want to delete ALL THE TASKS?`)) {
      this.grandFatherService.deleteTask(this.task.idList);
      this.notification.success('SUCCESS!', `All the tasks have been successfully deleted.`, {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
      });
    }
  }

  updateNameTask(ev) {
    // Comprobamos que no sea vacio
    if (ev.target.value) {
      this.task.name = ev.target.value.trim();
      this.grandFatherService.updateTask(this.task);
      this.modTask = false;
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

  updateDescriptionTask(ev) {    
    this.task.description = ev.target.value.trim();    
    this.grandFatherService.updateTask(this.task);
    this.modDescTask = false;
  }

  updateColorTask(ev) {
    this.task.color = this.color;
    this.grandFatherService.updateTask(this.task); // Puedo usar el mismo modificar ya que modifica toda la Tarea
  }

}
