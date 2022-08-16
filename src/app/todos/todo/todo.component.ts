import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../types/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = {} as Todo;

  constructor() {
  }

  ngOnInit(): void {
  }

  completeTodo(todo: Todo, event: Event) {
    todo.done = (event.target as HTMLInputElement).checked;
  }
}
