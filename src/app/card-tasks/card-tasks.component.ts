import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Task
} from '../modelos.interface';
import {
  TrelloMethodsService
} from '../trello-methods.service';

@Component({
  selector: 'app-card-tasks',
  templateUrl: './card-tasks.component.html',
  styleUrls: ['./card-tasks.component.scss']
})
export class CardTasksComponent implements OnInit {

  @Input() task: Task;
  @Input() grandFatherService: TrelloMethodsService;

  modTask: boolean = false;
  watchTask: boolean = false;
  modDescTask: boolean = false;

  color: string;
  constructor() {}

  ngOnInit() {
    console.log("entra");

  }

  deleteCardTask() {
    if (confirm(`Are you sure you want to delete ALL THE TASKS?`)) {
      this.grandFatherService.deleteTask(this.task.idList);
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
      alert(`List's name can not be empty!`);
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
