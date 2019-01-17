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
  constructor() {}

  ngOnInit() {
    console.log("entra");

  }

  deleteCardTask() {
    if (confirm(`Are you sure you want to delete the task: ${this.task.name}?`)) {
      this.grandFatherService.deleteTask(this.task);
    }
  }

}
