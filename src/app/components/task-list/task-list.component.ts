import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { TodolistService } from './../../services/todolist.service';

import { Todolist } from 'Todolist';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  faTrashAlt =  faTrashAlt;

  tasks!: Todolist[];

  tasks$!: Observable<Todolist[]>;

  constructor(private service: TodolistService) {}

  ngOnInit(): void {
    this.service.list()
    .subscribe(dados => this.tasks = dados);

    this.tasks$ = this.service.list();
  }

  removeTask(task: Todolist) {
    this.tasks = this.tasks.filter((a) => task.title !== a.title);
    this.service.remove(task.id).subscribe();
  }

}
