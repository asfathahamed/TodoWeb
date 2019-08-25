import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { NotesComponent } from "./notes.component";

const routes: Routes = [
  {
    path: "",
    component: NotesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
