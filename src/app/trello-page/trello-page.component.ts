import {
  Component,
  OnInit
} from '@angular/core';
import {
  TrelloMethodsService
} from '../trello-methods.service';

import { Data } from '../modelos.interface';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-trello-page',
  templateUrl: './trello-page.component.html',
  styleUrls: ['./trello-page.component.scss']
})
export class TrelloPageComponent implements OnInit {

  data: Data;
  inputList: string;

  constructor(private service: TrelloMethodsService, private notification: NotificationsService) {}

  ngOnInit() {
    this.data = this.service.getData();
  }

  addNewList() {
    if (this.inputList) {
      this.service.addList(this.inputList);
      this.inputList = '';
    } else {      
      this.notification.error('ERROR!', `List's name can not be empty!`, {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
      });
    }
  }

}
