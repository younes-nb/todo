import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosService} from "./todos.service";
import {TodosComponent} from "./todos.component";
import {TodoComponent} from "./todo/todo.component";
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [TodosComponent, TodoComponent],
  providers: [TodosService],
    imports: [
        CommonModule,
        DragDropModule
    ],
  exports: [TodosComponent]
})
export class TodosModule {
}
