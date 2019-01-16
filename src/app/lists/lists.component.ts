import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskList } from '../modelos.interface';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  @Input() list: TaskList;
  @Output() deleteList = new EventEmitter < TaskList > ();
  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteList.emit(this.list);
  }

}
