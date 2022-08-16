import {Todo} from "../types/todo";

export class TodosService {
  private todos: Todo[] = [];
  private isNewTodoShowing: boolean = true;

  constructor() {
  }

  get() {
    return this.todos;
  }

  add(task: string) {
    let todo: Todo = {
      task: task,
      isDone: false,
      isShowing: this.isNewTodoShowing
    };
    this.todos.push(todo)
  }

  remove(todo: Todo) {
    this.todos = this.todos.filter(td => td !== todo);
  }

  filter(filterMode: string) {
    switch (filterMode) {
      case "All":
        this.todos.forEach(todo => todo.isShowing = true);
        this.isNewTodoShowing = true;
        break;
      case "Active":
        this.todos.forEach(todo => todo.isShowing = !todo.isDone);
        this.isNewTodoShowing = true;
        break;
      case "Completed":
        this.todos.forEach(todo => todo.isShowing = todo.isDone);
        this.isNewTodoShowing = false;
        break;
    }
  }
}
