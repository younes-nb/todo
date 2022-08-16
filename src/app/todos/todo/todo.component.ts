import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../types/todo";
import {TodosService} from "../todos.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = {} as Todo;

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
  }

  removeTodo(todo: Todo) {
    this.todosService.remove(todo);
  }
}
