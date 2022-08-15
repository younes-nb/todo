import {Component, OnInit} from '@angular/core';
import {TodosService} from "./todos.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
  }

  getTodos() {
    return this.todosService.get();
  }

  addTodo(event: Event) {
    let input = event.target as HTMLInputElement;
    if (input.value) {
      this.todosService.add(input.value);
      input.value = "";
    }
  }
}
