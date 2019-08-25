import { Component } from "@angular/core";

@Component({
  selector: "todo-component",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.less"]
})
export class TodoComponent {
  title = "Todo";

  public editTodo(id) {}

  public deleteTodo(id) {}
}
