import {
  Component,
  OnInit
} from '@angular/core';
import {
  TrelloMethodsService
} from '../trello-methods.service';

@Component({
  selector: 'app-trello-page',
  templateUrl: './trello-page.component.html',
  styleUrls: ['./trello-page.component.scss']
})
export class TrelloPageComponent implements OnInit {

  inputList: string;

  constructor(private service: TrelloMethodsService) {}

  ngOnInit() {}

  addNewList() {
    if (this.inputList) {
      this.service.addList(this.inputList);
      this.inputList = '';
    } else {
      alert(`List's name can not be empty!`);
    }
  }

}
