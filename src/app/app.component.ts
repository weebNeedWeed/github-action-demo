import { Todo } from './types/Todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos: Todo[] = [];

  onAddNewTodo(data: string) {
    this.todos.push({
      name: data,
      isDone: false,
    });
  }
}
