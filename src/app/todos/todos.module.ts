import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosService} from "./todos.service";
import {TodosComponent} from "./todos.component";
import {TodoComponent} from "./todo/todo.component";


@NgModule({
  declarations: [TodosComponent, TodoComponent],
  providers: [TodosService],
  imports: [
    CommonModule
  ],
  exports: [TodosComponent]
})
export class TodosModule {
}
