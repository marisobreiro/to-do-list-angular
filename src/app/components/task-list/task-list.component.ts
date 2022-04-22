import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todolist } from 'Todolist';
import { TodolistService } from './../../services/todolist.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  btnText = "Adicionar tarefa";

  tasks!: Todolist[];

  tasks$!: Observable<Todolist[]>;

  constructor(private service: TodolistService) {}

  ngOnInit(): void {
    this.service.list()
    .subscribe(dados => this.tasks = dados);

    this.tasks$ = this.service.list();
  }

}
