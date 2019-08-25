import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoRoutingModule } from "./todo-routing.module";
import { SharedModule } from "../shared/shared.module";

import { TodoComponent } from "./todo.component";
import { ListComponent } from "./list/list.component";
import { AddComponent } from "./add/add.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [TodoComponent, ListComponent, AddComponent],
  imports: [CommonModule, FormsModule, TodoRoutingModule, SharedModule],
  exports: [TodoComponent, ListComponent, AddComponent]
})
export class TodoModule {}
