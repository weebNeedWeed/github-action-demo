import { Todo } from './types/Todo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos: Todo[] = [];

  ngOnInit() {
    const dbTodos = localStorage.getItem('todos');
    if (dbTodos) {
      this.todos = JSON.parse(dbTodos);
    }
  }

  private saveChanges() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  onAddNewTodo(data: string) {
    this.todos.push({
      name: data,
      isDone: false,
    });

    this.saveChanges();
  }

  onDelete(todoIndex: number) {
    this.todos = this.todos.filter(
      (element: Todo, index: number) => index !== todoIndex
    );

    this.saveChanges();
  }

  onChangeProgressStatus(event: any) {
    this.todos[event.todoIndex].isDone = event.status;

    this.saveChanges();
  }

  onNameChange(event: any) {
    this.todos[event.todoIndex].name = event.newName;

    this.saveChanges();
  }
}
