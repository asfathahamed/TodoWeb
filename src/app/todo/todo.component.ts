import { Component, OnInit } from '@angular/core';
import { TodoService } from '../data/todo.service';

export interface TodoItem {
  id: number;
  description: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {
  public todoList: TodoItem[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {

    this.todoService.getTodoList().subscribe(response => {
      this.todoList = response;
    });
  }

}
