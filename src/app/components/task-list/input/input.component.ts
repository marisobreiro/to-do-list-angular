import { TodolistService } from './../../../services/todolist.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Todolist } from 'Todolist';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Todolist>()
  @Input() btnText!: string;

  taskForm!: FormGroup

  constructor(private service: TodolistService, private location: Location) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.required)
    })
  }

  get title() {
    return this.taskForm.get('title')!;
  }

  submit() {
    if (this.taskForm.invalid) {
      return;
    }
    console.log(this.taskForm.value)!;
    this.service.create(this.taskForm.value).subscribe(
      success => {
        console.log('Sucesso');
        window.location.reload();
      },
      error => console.error(error),
      () => console.log('Request completa!')
    );
  }


}
