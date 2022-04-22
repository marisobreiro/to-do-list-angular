import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pipe } from '@angular/core';
import { delay, take } from 'rxjs';

import { Todolist } from 'Todolist';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private apiUrl = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Todolist[]>(this.apiUrl)
      .pipe(
        delay(2000),
      )
  }

  create(task: any) {
    return this.http.post(this.apiUrl, task).pipe(take(1));
  }

  remove(id: number) {
    return this.http.delete<Task>(`${this.apiUrl}/${id}`);
  }
}
