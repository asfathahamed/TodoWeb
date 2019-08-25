import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: "",
    component: TodoComponent,
    children: [
      {
        path: "",
        component: ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
