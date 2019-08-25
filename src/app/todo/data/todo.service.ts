import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of, throwError, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private _todoList: any;
  get todoList() {
    return this._todoList;
  }
  set todoList(todoList) {
    this._todoList = todoList;
    this.emitTodoList();
  }
  todoListChange = new BehaviorSubject(this.todoList);
  constructor(private http: HttpClient) {
    this.getTodoList();
  }

  private emitTodoList() {
    this.todoListChange.next(this.todoList);
  }

  public getTodoList() {
    this.http.get("http://localhost:5000/api/todo").subscribe(response => {
      this.todoList = response;
    });
  }

  public addToTodoList(todoItem) {
    if (todoItem) {
      const item = {
        id: 1,
        description: todoItem
      };
      this.todoList.push(item);
      this.emitTodoList();
    } else {
      throwError("Unable to push to list");
    }
  }
}
