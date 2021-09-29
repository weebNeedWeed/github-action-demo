import { Todo } from './../../types/Todo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  public todos: Todo[] = [];

  @Output()
  public delete = new EventEmitter();
  @Output()
  public changeProgressStatus = new EventEmitter();
  @Output()
  public changeName = new EventEmitter();

  public index = -1;

  onDelete(event: MouseEvent, todoIndex: number) {
    event.stopPropagation();
    this.delete.emit(todoIndex);
  }

  onChange(todoIndex: number, event: Boolean) {
    this.changeProgressStatus.emit({ todoIndex, status: event });
  }

  onNameChange(todoIndex: number, newName: string) {
    this.changeName.emit({ todoIndex, newName });
  }
}
