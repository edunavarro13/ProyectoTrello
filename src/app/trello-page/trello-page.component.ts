import { Component, OnInit } from '@angular/core';
import { TrelloMethodsService } from '../trello-methods.service';

@Component({
  selector: 'app-trello-page',
  templateUrl: './trello-page.component.html',
  styleUrls: ['./trello-page.component.scss']
})
export class TrelloPageComponent implements OnInit {

  constructor(private service: TrelloMethodsService) { }

  ngOnInit() {
  }

  addNewList(ev) {
    this.service.addList(ev.target.value);
    ev.target.value = '';
  }

}
