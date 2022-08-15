import {Todo} from "../types/todo";

export class TodosService {
  private todos: Todo[] = [];

  constructor() {
  }

  get() {
    return this.todos;
  }

  add(task: string) {
    let todo: Todo = {
      task: task,
      done: false
    };
    this.todos.push(todo)
  }

  remove(todo: Todo) {
    this.todos = this.todos.filter(td => td !== todo)
  }
}
