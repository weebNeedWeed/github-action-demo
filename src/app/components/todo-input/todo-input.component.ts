import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output()
  public addNewTodo = new EventEmitter();

  onSubmit(form: NgForm) {
    this.addNewTodo.emit(form.value.todo);
    form.resetForm();
  }
}
