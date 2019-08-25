import { Component, OnInit } from "@angular/core";
import { TodoService } from "../data/todo.service";

export interface TodoItem {
  id: number;
  description: string;
}

@Component({
  selector: "todo-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.less"]
})
export class ListComponent implements OnInit {
  public todoList: TodoItem[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.todoListChange.subscribe(response => {
      this.todoList = response;
    });

    // this.todoList = [
    //   {
    //     id: 1,
    //     description: "World"
    //   },
    //   {
    //     id: 2,
    //     description: "Hello"
    //   },
    //   {
    //     id: 3,
    //     description: "Welcome"
    //   }
    // ];
  }
}
