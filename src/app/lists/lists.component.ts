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

  constructor() {}

  ngOnInit() {}

  delete() {
    if (confirm(`Are you sure you want to delete the list: ${this.list.name}?`)) {
      this.serviceFather.deleteList(this.list);
    }
  }
  update(ev) {
    // Comprobamos que no sea vacio
    if (ev.target.value) {
      this.list.name = ev.target.value;
      this.serviceFather.updateList(this.list);
      this.modName = false;
    }
    else {
      alert(`List's name can not be empty!`);
    }
  }

  newTask() {
    // Comprobamos que no sea vacio
    if (this.inputTask) {
      this.serviceFather.addTask(this.inputTask, this.list);
      this.inputTask = '';
    }
    else {
      alert(`List's name can not be empty!`);
    }
  }

}
