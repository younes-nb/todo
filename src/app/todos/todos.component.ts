import {Component, Input, OnInit} from '@angular/core';
import {TodosService} from "./todos.service";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() isDarkMode: boolean = false;
  mobileFooter: boolean = false;

  constructor(private todosService: TodosService, private responsive: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe(result => this.mobileFooter = result.matches)
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

  filterTodos(event: Event) {
    let button = event.target as HTMLButtonElement;
    document.querySelectorAll(".footer-item").forEach(footerItem => footerItem.classList.remove("active-filter"));
    button.classList.add("active-filter");
    this.todosService.filter(button.innerText);
  }

  clearCompletedTodos() {
    this.todosService.clearCompleted();
  }

  nothingToShow(): boolean {
    for (let todo of this.todosService.get()) {
      if (todo.isShowing)
        return false;
    }
    return true;
  }

  getItemsLeft(): number {
    let count = 0;
    for (let todo of this.todosService.get()) {
      if (!todo.isDone)
        count++;
    }
    return count;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todosService.get(), event.previousIndex, event.currentIndex);
  }
}
