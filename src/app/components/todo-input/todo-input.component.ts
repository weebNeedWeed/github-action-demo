import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public todo: string = '';

  @Output()
  public addNewTodo = new EventEmitter();

  onSubmit() {
    this.addNewTodo.emit(this.todo);
  }
}
