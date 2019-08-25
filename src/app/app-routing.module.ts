import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/notes",
    pathMatch: "full"
  },
  {
    path: "todo",
    loadChildren: () => import("./todo/todo.module").then(d => d.TodoModule)
  },
  {
    path: "notes",
    loadChildren: () => import("./notes/notes.module").then(d => d.NotesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
