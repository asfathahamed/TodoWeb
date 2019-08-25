import { Component } from "@angular/core";
import { TodoService } from "../data/todo.service";

@Component({
  selector: "todo-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.less"]
})
export class AddComponent {
  constructor(private todoService: TodoService) {}

  public addTodo(todoItem) {
    this.todoService.addToTodoList(todoItem);
  }
}
