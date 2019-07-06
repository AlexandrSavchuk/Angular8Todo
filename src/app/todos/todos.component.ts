import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../app.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[] = []

  constructor() { }

  ngOnInit() {
  }

}
