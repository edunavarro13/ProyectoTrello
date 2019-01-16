import { Component, OnInit } from '@angular/core';
import { Data, TaskList } from '../modelos.interface';
import { TrelloMethodsService } from '../trello-methods.service';

@Component({
  selector: 'app-trello-page',
  templateUrl: './trello-page.component.html',
  styleUrls: ['./trello-page.component.scss']
})
export class TrelloPageComponent implements OnInit {

  dataTrello: Data;
  constructor(private service: TrelloMethodsService) { }

  ngOnInit() {
  }

  addNewList(ev) {
    this.dataTrello = this.service.addList(ev.target.value);
    ev.target.value = '';
  }

  deleteTrelloList(ev: TaskList) {
    this.dataTrello = this.service.deleteList(ev);
  }

}
