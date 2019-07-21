import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoItem } from '../todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  public getTodoList(): Observable<any> {
    return this.http.get('http://localhost:5000/api/todo');
  }
}
